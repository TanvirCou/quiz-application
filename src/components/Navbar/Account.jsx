import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

const Account = () => {
    const { currentUser, logout } = useAuth();
    return (
        <div className="text-blue-600 text-base font-medium flex pt-3 items-center">
            {currentUser ? (
                <>
                    <span className="pr-2"><FontAwesomeIcon icon={faUser} /></span>
                    <span className="pr-2">{currentUser.displayName}</span>
                    <span className="pr-6 cursor-pointer" onClick={logout}><FontAwesomeIcon icon={faRightFromBracket} /></span>
                </>
            ) : (
                <>
                    <Link to='/signup'>
                        <p>Signup</p>
                    </Link>
                    <Link to='/login'>
                        <p className="pr-6 pl-2">Login</p>
                    </Link>
                </>
            )}
        </div>
    );
};

export default Account;