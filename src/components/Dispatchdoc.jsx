import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DispatchDoc = () => {
  const [docType, setDocType] = useState("");
  const [docId, setDocId] = useState("");
  const [dispatchDate, setDispatchDate] = useState(null);
  const [expectedApproval, setExpectedApproval] = useState(null);
  const [remarks, setRemarks] = useState("");
  const [attachment, setAttachment] = useState("");
  const [appName, setAppName] = useState("");
  const [appId, setAppId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted!");
  };

  return (
    <div className=" h-screen w-full ">
      <h1 className="text-2xl ml-5">Dispatch Document</h1>
      <form onSubmit={handleSubmit} className="mt-14 w-5/6 ml-5">
        <div className="flex mb-4">
          <div className="flex-1 mr-2">
            <label
              htmlFor="docType"
              className="block font-medium text-gray-700 mb-2"
            >
              Document Type
            </label>
            <select
              required
              id="docType"
              value={docType}
              onChange={(e) => setDocType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="">Select Document Type</option>
              <option value="Type A">Grade Change</option>
              <option value="Type B">Exam Retake</option>
              <option value="Type C">Section Change</option>
            </select>
          </div>
          <div className="flex-1 ml-2">
            <label
              htmlFor="docId"
              className="block font-medium text-gray-700 mb-2"
            >
              Document ID
            </label>
            <input
              required
              type="text"
              id="docId"
              value={docId}
              onChange={(e) => setDocId(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>
        <div className="flex mb-4">
          <div className="flex-1 mr-2">
            <label
              htmlFor="appId"
              className="block font-medium text-gray-700 mb-2"
            >
              Applicant ID
            </label>
            <input
              required
              type="text"
              id="appId"
              value={appId}
              onChange={(e) => setAppId(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div className="flex-1 ml-2">
            <label
              htmlFor="appName"
              className="block font-medium text-gray-700 mb-2"
            >
              Applicant Name
            </label>
            <input
              required
              type="text"
              id="appName"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>
        <div className="flex mb-4">
          <div className="flex-1 mr-2">
            <label
              htmlFor="dispatchDate"
              className="block font-medium text-gray-700 mb-2"
            >
              Dispatch Date
            </label>
            <DatePicker
              required
              id="dispatchDate"
              selected={dispatchDate}
              onChange={(date) => setDispatchDate(date)}
              dateFormat="dd/MM/yyyy"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div className="flex-1 ml-2">
            <label
              htmlFor="expectedApproval"
              className="block font-medium text-gray-700 mb-2"
            >
              Expected Approval
            </label>
            <DatePicker
              required
              id="expectedApproval"
              selected={expectedApproval}
              onChange={(date) => setExpectedApproval(date)}
              dateFormat="dd/MM/yyyy"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>
        <div className="flex mb-4">
          <div className="flex-1 mr-2">
            <label
              htmlFor="remarks"
              className="block font-medium text-gray-700 mb-2"
            >
              Remarks
            </label>
            <textarea
              id="remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
              rows="3"
            ></textarea>
          </div>
          <div className="flex-1 ml-2">
            <label
              htmlFor="attachmentType"
              className="block font-medium text-gray-700 mb-2"
            >
              Attachment
            </label>

            <input
              required
              type="file"
              name="file"
              className="w-full"
              value={attachment}
              onChange={(e) => setAttachment(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Dispatch
        </button>
      </form>
    </div>
  );
};

export default DispatchDoc;
