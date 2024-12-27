import AddBtn from "./AddBtn";
import Pagination from "./Pagination";
import Tbody from "./Tbody";
import Thead from "./Thead";

export default function UserListContainer() {
    return (
        <>
            <div className="table-wrapper">

                <table className="table">
                    <Thead />
                    <Tbody />
                </table>

            </div>
            <AddBtn />
            <Pagination/>
        </>
    )
}