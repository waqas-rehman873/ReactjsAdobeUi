import RightChildBody from "./rightChildBody/RightChildBody";
import RightChildHeader from "./rightChildHeader/RightChildHeader";
const RightSide = () => {
    return (
        <main className="rightSide">
            <RightChildHeader />
            <RightChildBody />
        </main>
    );
};

export default RightSide;
