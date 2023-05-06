import { useState } from "react";

function SearchDoc() {
  // const [documentId, setDocumentId] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [applicantId, setApplicantId] = useState("");
  const [applicantName, setApplicantName] = useState("");

  const doc = [
    {
      docid: 1,
      type: "Grade Change",
      status: "Complete",
      dispatchdate: "2021-09-01",
      applicantName: "bilal",
      applicantID: "20i-0542",
      enddate: "2021-09-01",
      department: "Accounting",
      attachment:
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      docid: 2,
      type: "Exam Retake",
      status: "Complete",
      dispatchdate: "2023-05-03",
      applicantName: "bilal",
      applicantID: "20i-0542",
      enddate: "2023-05-01",
      department: "Accounting",
    },
    {
      docid: 3,
      type: "Grade Change",
      status: "Complete",
      dispatchdate: "2023-05-02",
      applicantName: "bilal",
      applicantID: "20i-0542",
      enddate: "2021-05-04",
      department: "Accounting",
    },
    {
      docid: 4,
      type: "Grade Change",
      status: "Complete",
      dispatchdate: "2021-09-01",
      applicantName: "bilal",
      applicantID: "20i-0542",
      enddate: "2021-09-01",
      department: "Accounting",
    },
    {
      docid: 5,
      type: "Grade Change",
      status: "Complete",
      dispatchdate: "2021-09-01",
      applicantName: "bilal",
      applicantID: "20i-0542",
      enddate: "2021-09-01",
      department: "Accounting",
    },
  ];

  function filterDocuments() {
    return doc.filter((doc) => {
      if (applicantId && doc.applicantID !== Number(applicantId)) {
        return false;
      }

      if (documentType && doc.type !== documentType) {
        return false;
      }
      if (startDate && new Date(doc.dispatchdate) < new Date(startDate)) {
        return false;
      }
      if (endDate && new Date(doc.dispatchdate) > new Date(endDate)) {
        return false;
      }
      return true;
    });
  }

  return (
    <div className="w-full">
      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl ml-5">Search Document</h1>
        <div className="flex space-x-4">
          <input
            type="text"
            value={applicantId}
            onChange={(e) => setApplicantId(e.target.value)}
            placeholder="Enter Applicant ID"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          />
          <input
            type="text"
            value={applicantName}
            onChange={(e) => setApplicantName(e.target.value)}
            placeholder="Enter Applicant Name"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Start date"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="End date"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          />
          <select
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">All Documents</option>
            <option value="Grade Change">Grade Change</option>
            <option value="Exam Retake">Exam Retake</option>
            <option value="Section Change">Section Change</option>
          </select>
          <button
            className="px-4 py-2 text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
            onClick={() => filterDocuments()}
          >
            Search
          </button>
        </div>
        <ul className="space-y-4">
          <li className="flex space-x-4 font-bold">
            <div className="w-1/6">Document ID</div>
            <div className="w-1/6">Type</div>
            <div className="w-1/6">Status</div>
            <div className="w-1/6">Dispatchdate</div>
            <div className="w-1/6">Applicant Name</div>
            <div className="w-1/6">Applicant ID</div>
            <div className="w-1/6"></div>
          </li>
          {filterDocuments().map((doc) => (
            <div>
              <li className="flex space-x-4" key={doc.docid}>
                <div className="w-1/6">{doc.docid}</div>
                <div className="w-1/6">{doc.type}</div>
                <div className="w-1/6">{doc.status}</div>
                <div className="w-1/6">{doc.dispatchdate}</div>
                <div className="w-1/6">{doc.applicantName}</div>
                <div className="w-1/6">{doc.applicantID}</div>
                <div className="w-1/6">
                  <button className="px-2 text-white bg-emerald-500 rounded-md hover:bg-emerald-600">
                    View
                  </button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchDoc;
