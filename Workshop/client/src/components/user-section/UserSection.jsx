import AddBtn from "./AddBtn";
import Pagination from "./pagination/Pagination";
import SearchBar from "../search-bar/SearchBar";
import UserList from "./user-list/User-list";

export default function UserSection() {
    return (
        <section className="card users-container">

            <SearchBar />
            <UserList />
            <AddBtn />
            <Pagination />

        </section>
    )
}
