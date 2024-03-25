import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{job_type}</button>
                </div>
                <div className='flex gap-4'>
                    <h2 className='flex gap-2'><CiLocationOn className='text-2xl'></CiLocationOn> {location}</h2>

                    <h2 className='flex gap-2'><AiOutlineDollarCircle className='text-2xl'></AiOutlineDollarCircle> {salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn bg-[#7E90FE] text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;