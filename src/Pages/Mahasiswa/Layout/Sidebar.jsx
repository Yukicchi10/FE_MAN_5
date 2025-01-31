import { FaBook, FaCalendarAlt, FaHome, FaTasks, FaUserCog } from 'react-icons/fa';
import logoSI from '../../../Img/LOGOMAN5.png'
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="fixed flex top-0 left-0 h-screen w-16 flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
        <img src={logoSI} className='logsi'/>
        <Divider/>
        <SideBarIcon icon={<FaHome size="28"/>} text="Dashboard" url='/dashboard' />
        {/* <SideBarIcon icon={<FaCalendar size="25" />} text="Absensi" url='/mahasiswa/absen' /> */}
        <Divider/>
        <SideBarIcon icon={<FaBook size="25" />} text="Materi" url='/materi' />
        <SideBarIcon icon={<FaTasks size="25" />} text="Tugas" url='/tugas' />
        <Divider />
        <SideBarIcon icon={<FaCalendarAlt size="25" />} text="Kalender Akademik" url='/kalender-akademik' />
        <SideBarIcon icon={<FaUserCog size="25" />} text="Profil" url='/profil' />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡', url = '#' }) => (
  <Link to={url} className="sidebar-icon group">
  {/* // <div className="sidebar-icon group"> */}
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  {/* </div> */}
  </Link>
);

const Divider = () => <div className="sidebar-hr" />;

export default SideBar;
