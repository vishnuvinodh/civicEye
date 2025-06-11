import user from "../Models/userschema.js";
import complaints from "../Models/complaintschema.js";
import feedback from "../Models/feedbackschema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  console.log("Received registration data:", req.body);
  try {
    const existingmail = await user.findOne({ email: req.body.email });
    if (existingmail) {
      return res.status(400).json("Mail already exists");
    }
    const hashpassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashpassword);
    const userData = { ...req.body, password: hashpassword };

    const newuser = new user(userData);
    const saveduser = await newuser.save();
    return res.json(saveduser);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Error occurred during register" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let response = await user.findOne({ email: email });

    if (!response) {
      return res.status(404).json("User not found");
    }

    let matchedpassword = await bcrypt.compare(password, response.password);
    if (!matchedpassword) {
      return res.status(401).json("Invalid password");
    }

    const token = jwt.sign(
      {
        userId: response._id,
        email: response.email,
      },
      "abc",
      { expiresIn: "1h" }
    );

    return res.status(201).json({
      message: "Login successful",
      token: token,
      _id: response._id,
      usertype: response.usertype,
    });
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const viweuser = async (req, res) => {
  try {
    let id = req.params.id;
    const response = await user.findById(id);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user" });
  }
};

const updateuser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedata = req.body;

    if (updatedata.password) {
      updatedata.password = await bcrypt.hash(updatedata.password, 10);
    }

    const updateduser = await user.findByIdAndUpdate(id, updatedata, {
      new: true,
    });

    if (!updateduser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updateduser);
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};

const regcomplaint = async (req, res) => {
  try {
    let imagepath = req.file.filename;
    const newcomplaint = new complaints({ ...req.body, proof: imagepath });
    const savedcomplaint = await newcomplaint.save();
    res.json(savedcomplaint);
    console.log(savedcomplaint);
  } catch (error) {
    res.status(500).json({ message: "Error submitting complaint", error });
  }
};

const feedbkk = async (req, res) => {
  try {
    const { feedcondent, userId } = req.body;
    console.log("Feedback submit userId:", userId);
    const newfeedb = new feedback({ userId, feedcondent });
    const savefeed = await newfeedb.save();
    res.json(savefeed);
  } catch (error) {
    res.status(500).json({ message: "Error submitting feedback", error });
  }
};

const feedview = async (req, res) => {
  try {
    const feedbaks = await feedback.find().populate("userId", "name");

    const respondata = feedbaks.map((f) => ({
      feedcondent: f.feedcondent,
      createdAt: f.createdAt,
      user: {
        name: f.userId?.name || "Anonymous",
      },
    }));

    res.json(respondata);
  } catch (error) {
    res.status(500).json({ message: "Error fetching feedback", error });
  }
};

const viwcomp = async (req, res) => {
  try {
    let id = req.params.id;
    const userComplaints = await complaints.find({ userId: id });
    res.json(userComplaints);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user complaints", error });
  }
};

const admincomplaint = async (req, res) => {
  try {
    const adcomplaint = await complaints.find();
    const responsedata = [];
    for (let a of adcomplaint) {
      const response = await user.findById(a.userId);
      responsedata.push({ complaints: a, user: response });
    }
    res.json(responsedata);
  } catch (error) {
    res.status(500).json({ message: "Error fetching admin complaints", error });
  }
};

const updatestatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const normalizedStatus = status.trim().toLowerCase();

    const statusMap = {
      resolved: "verified",
      verified: "verified",
      rejected: "rejected",
      pending: "pending",
    };

    const mappedStatus = statusMap[normalizedStatus] || normalizedStatus;

    const updatecomplaint = await complaints.findByIdAndUpdate(
      id,
      { status: mappedStatus },
      { new: true }
    );

    if (!updatecomplaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    res.json({ message: "Status updated", complaint: updatecomplaint });
  } catch (error) {
    res.status(500).json({ message: "Error updating status", error });
  }
};

const adminstats = async (req, res) => {
  try {
    const totalComplaints = await complaints.countDocuments();
    const verifiedComplaints = await complaints.countDocuments({
       status: { $regex: /^\s*(verified|resolved)\s*$/i },
    });
    const pendingComplaints = await complaints.countDocuments({
      status: { $regex: /^\s*pending\s*$/i },
    });
    const rejectedComplaints = await complaints.countDocuments({
      status: { $regex: /^\s*rejected\s*$/i },
    });

    const complaintsByMonth = await complaints.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const complaintsByMonthFormatted = complaintsByMonth.map((item) => ({
      month: monthNames[item._id - 1],
      count: item.count,
    }));

    const complaintsByDistrict = await complaints.aggregate([
      {
        $group: {
          _id: "$location",
          count: { $sum: 1 },
        },
      },
    ]);
    const complaintsByDistrictFormatted = complaintsByDistrict.map((item) => ({
      district: item._id || "Unknown",
      count: item.count,
    }));

    const recentComplaints = await complaints
      .find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("description status location createdAt");

    res.json({
      totalComplaints,
      verifiedComplaints,
      pendingComplaints,
      rejectedComplaints,
      complaintsByMonth: complaintsByMonthFormatted,
      complaintsByDistrict: complaintsByDistrictFormatted,
      recentComplaints,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};

export {
  register, login, viweuser,
  updateuser,
  regcomplaint,
  viwcomp,
  admincomplaint,
  updatestatus,
  feedbkk,
  feedview,
  adminstats,
};
