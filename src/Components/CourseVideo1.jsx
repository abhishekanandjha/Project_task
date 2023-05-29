import React,{useState} from "react";
// import Sidebar from "react-sidebar";
import "./CourseVideo1.css";
import { Document, Page } from 'react-pdf';




function CourseVideo1(props){
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selectedPDF, setSelectedPDF] = useState(null);


    const videos = [
        { id: 1, title: 'Video 1', videoId: 'xcJtL7QggTI' },
        { id: 2, title: 'Video 2', videoId: 'abc123xyz' },
        { id: 3, title: 'Video 3', videoId: '123xyzabc' },
    ];
    const pdfFiles = [
        { id: 1, title: 'PDF 1', url: 'poa.pdf' },  
        { id: 2, title: 'PDF 2', url: '/path/to/pdf2.pdf' },
        { id: 3, title: 'PDF 3', url: '/path/to/pdf3.pdf' },
    ];

    const handleVideoClick = (video) => {
        setSelectedVideo(video);
    };

    const handlePDFClick = (pdf) => {
        setSelectedVideo(null); // Reset selected video when a PDF is clicked
        setSelectedPDF(pdf);
    };


    return(
        <>
            <div className="video-container">
                <div className="sidebar">
                    <h2>Video List</h2>
                    {videos.map((video) => (
                    <div
                        key={video.id}
                        className={`video-item ${selectedVideo === video ? 'selected' : ''}`}
                        onClick={() => handleVideoClick(video)}
                    >
                        {video.title}
                    </div>
                    ))}
                    <h2>PDF List</h2>
                    {pdfFiles.map((pdf) => (
                    <div
                        key={pdf.id}
                        className={`video-item ${selectedPDF === pdf ? 'selected' : ''}`}
                        onClick={() => handlePDFClick(pdf)}
                    >
                        {pdf.title}
                    </div>
                    ))}
                </div>
                <div className="video-player">
                    {selectedVideo ? (
                    <div className="youtube-embed">
                        <iframe
                        title="YouTube Video"
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe>
                    </div>
                    ) : selectedPDF ? (
                    <div className="pdf-embed">
                        
                        {/* <embed src={selectedPDF.url} type="application/pdf" width="100%" height="100%" /> */}
                        
                        <a href={selectedPDF.url} target="_blank" rel="noopener noreferrer">
                            Open PDF
                        </a>
                    </div>
                    ) : (
                    <div className="placeholder">Select a video or PDF to view</div>
                    )}
                </div>
            </div>
        </>
    );
}

export default CourseVideo1;