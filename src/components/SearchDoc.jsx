import { useState } from "react";

function SearchDoc() {
  // const [documentId, setDocumentId] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [applicantId, setApplicantId] = useState("");
  const [applicantName, setApplicantName] = useState("");
  const [status, setStatus] = useState("");

  const doc = [
    {
      docid: 1,
      type: "Grade Change",
      status: "Complete",
      dispatchdate: "2021-09-01",
      applicantName: "bilal",
      applicantID: "20i-0542",
      enddate: "2021-09-02",
      department: "Accounting",
      attachment:
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      docid: 2,
      type: "Exam Retake",
      status: "In-Process",
      dispatchdate: "2023-05-03",
      applicantName: "shoaib",
      applicantID: "19i-0542",
      enddate: "2023-05-01",
      department: "Accounting",
      attachment:
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      docid: 3,
      type: "Grade Change",
      status: "Complete",
      dispatchdate: "2023-05-02",
      applicantName: "ali",
      applicantID: "20i-0548",
      enddate: "2021-05-04",
      department: "Accounting",
      attachment:
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      docid: 4,
      type: "Section Change",
      status: "In-Process",
      dispatchdate: "2021-09-01",
      applicantName: "junaid",
      applicantID: "22i-0223",
      enddate: "2021-09-01",
      department: "Accounting",
      attachment:
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      docid: 5,
      type: "Section Change",
      status: "Rejected",
      dispatchdate: "2021-09-01",
      applicantName: "bilal",
      applicantID: "20i-0890",
      enddate: "2021-09-01",
      department: "Accounting",
      attachment:
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
  ];

  function filterDocuments() {
    return doc.filter((doc) => {
      if (applicantId && doc.applicantID.includes(applicantId) === false) {
        return false;
      }
      if (
        applicantName &&
        doc.applicantName.includes(applicantName) === false
      ) {
        return false;
      }
      if (documentType && doc.type !== documentType) {
        return false;
      }
      if (status && doc.status !== status) {
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
      <div className="flex flex-col space-y-8 space-x-5">
        {/* <h1 className="text-2xl ml-5 border-b-8 border-emerald-500 rounded-lg box-content">
          Search Document
        </h1> */}
        <h1
          className="text-2xl ml-5"
          style={{ borderBottomWidth: "fit-content" }}
        >
          <span className="border-b-8 border-emerald-500 rounded-lg">
            Search Document
          </span>
        </h1>
        <div className="flex space-x-4">
          <input
            type="text"
            value={applicantId}
            onChange={(e) => setApplicantId(e.target.value)}
            placeholder="Owner ID"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          />
          <input
            type="text"
            value={applicantName}
            onChange={(e) => setApplicantName(e.target.value)}
            placeholder="Owner Name"
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
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">All Statuses</option>
            <option value="Complete">Complete</option>
            <option value="Rejected">Rejected</option>
            <option value="In-Process">In-Process</option>
          </select>
        </div>
        {/* <button
          className="w-1/6 px-4 py-2 text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
          onClick={() => filterDocuments()}
        >
          Search
        </button> */}
        <ul className="space-y-4">
          <li className="flex space-x-4 font-bold">
            <div className="w-1/6">Document ID</div>
            <div className="w-1/6">Type</div>
            <div className="w-1/6">Status</div>
            <div className="w-1/6">Dispatch date</div>
            <div className="w-1/6">Close date</div>
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
                <div className="w-1/6">{doc.enddate}</div>
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
