import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchBookings = async () => {
            if (user?.email) {
                try {
                    const url = `https://real-state-project-server-omega.vercel.app/bookings?email=${user.email}`;
                    const res = await axios.get(url, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                        withCredentials: true,
                    });
                    setBookings(res.data);
                } catch (error) {
                    console.error("Error fetching bookings:", error);
                }
            }
        };
        fetchBookings();
    }, [user?.email]);

    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to delete this booking?")) {
            try {
                const response = await axios.delete(`https://real-state-project-server-omega.vercel.app/bookings/${id}`, {
                    withCredentials: true,
                });
                if (response.data.deletedCount > 0) {
                    alert("Booking deleted successfully");
                    setBookings((prev) => prev.filter((booking) => booking._id !== id));
                }
            } catch (error) {
                console.error("Error deleting booking:", error);
            }
        }
    };

    const handleConfirm = async (id) => {
        try {
            const response = await axios.patch(
                `https://real-state-project-server-omega.vercel.app/bookings/${id}`,
                { status: "confirm" },
                { withCredentials: true }
            );
            if (response.data.modifiedCount > 0) {
                setBookings((prev) =>
                    prev.map((booking) =>
                        booking._id === id ? { ...booking, status: "confirm" } : booking
                    )
                );
            }
        } catch (error) {
            console.error("Error confirming booking:", error);
        }
    };

    return (
        <div className="mt-20 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center my-12">
                    <h4 className="text-[18px] text-[#FF5A3C] font-semibold">Your Booking Property</h4>
                    <h2 className="text-[28px] text-black font-semibold">Choose Your Property</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className="bg-slate-300">
                            <tr>
                                <th>Action</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <BookingRow
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    handleConfirm={handleConfirm}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Bookings;
