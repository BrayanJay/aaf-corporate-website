import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FileCard = ({fileDirectory}) => {
  const [files, setFiles] = useState([]);



  const fetchFiles = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/data/getFiles?folder=media/attachments/${fileDirectory}`, {
      });
      setFiles(response.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load files");
    }
  };



  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {files.map((file, idx) => (
        <a
          key={idx}
          href={`src/${file.path}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 lg:p-10 bg-[#f6fcff] rounded-tl-2xl rounded-br-2xl shadow-lg flex-col justify-center items-center gap-5 inline-flex hover:transition-all hover:ease-in-out hover:duration-500 hover:scale-105 cursor-pointer"
          aria-label={file.title}
        >
          <div className="justify-center items-center flex">
            <FontAwesomeIcon
              icon={['fas', 'file']}
              className={`mx-1.5 text-2xl md:text-4xl text-blue-700`}
            />
          </div>
          <div className="w-32 text-center text-blue-900/80 text-sm font-bold">
            <span className="break-words whitespace-normal">{file.fileName}</span>
          </div>
          <div className="px-10 text-center text-black/40 text-base font-medium">
            {file.description}
          </div>
        </a>
      ))}
    </div>
  );
};

FileCard.propTypes = {
  fileDirectory: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default FileCard;