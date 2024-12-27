import Thead from "../Thead"
import UserListItem from "./user-list-item/User-list-item"

export default function UserList() {
    return (
        <div className="table-wrapper">

            <table className="table">
                <Thead />
                <tbody>
                    <UserListItem/>
                    <UserListItem/>
                    <UserListItem/>
                </tbody>
            </table>

        </div>
    )
}