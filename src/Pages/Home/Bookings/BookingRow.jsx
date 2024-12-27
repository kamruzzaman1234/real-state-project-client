const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
  const { _id, image, name, location, price, date, status } = booking;

  return (
      <tr>
          <td>
              <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-sm btn-danger"
              >
                  Delete
              </button>
              <button
                  onClick={() => handleConfirm(_id)}
                  className="btn btn-sm btn-success ml-2"
                  disabled={status === "confirm"}
              >
                  {status === "confirm" ? "Confirmed" : "Confirm"}
              </button>
          </td>
          <td>
              <img src={image} alt={name} className="w-12 h-12 rounded" />
          </td>
          <td>{name}</td>
          <td>{location}</td>
          <td>${price}</td>
          <td>{date}</td>
          <td>
              <span className={`badge ${status === "confirm" ? "bg-green-500" : "bg-gray-500"}`}>
                  {status}
              </span>
          </td>
      </tr>
  );
};

export default BookingRow;
