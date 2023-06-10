import { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    // this hook is used to change the focus from the button to the input field
    const inputRef = useRef();
    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input
                type="text"
                autoFocus
                ref={inputRef}
                id="addItem"
                placeholder="Add Item"
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type="submit"
                aria-label="Add Item"
                // after clicking the button the focus is changed to the input field
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
    );
};

export default AddItem;
