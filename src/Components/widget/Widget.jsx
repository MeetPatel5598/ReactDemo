import './widget.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export const Widget = () => {
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">USERS</span>
            <span className="corner">212121</span>
            <span className="link">See all users</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
                20%
                </div>
                <PersonOutlineOutlinedIcon  className='icon'/>
        </div>
    </div>
  )
}
