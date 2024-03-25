import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localstorage";


const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id == idInt);
    console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast('you have applied successfully')
    }
    return (
        <div>

            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 p-5 space-y-4 mb-5">
                    <h2 className="text-4xl">Details</h2>
                    <h2>Job Details of: {job.job_title}</h2>
                    <p><span className="font-bold">Job Description: </span>{job.job_description}</p>
                    <p><span className="font-bold">Job Responsibility: </span>{job.job_responsibility}</p>
                    <p><span className="font-bold">Educational Requirement: </span><br />{job.educational_requirements}</p>
                    <p><span className="font-bold">Experiences: </span><br />{job.experiences}</p>
                </div>
                <div className="border">
                    <h2 className="2xl">Side Thing</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now </button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;