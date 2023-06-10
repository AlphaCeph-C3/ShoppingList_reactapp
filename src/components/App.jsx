import { useState } from "react";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import SearchItem from "./SearchItem";

function App() {
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem("shoppinglist"))
    );
    const [search, setSearch] = useState("");

    const [newItem, setNewItem] = useState("");

    const setAndSaveItems = (newItems) => {
        setItems(newItems);
        localStorage.setItem("shoppinglist", JSON.stringify(newItems));
    };

    const addItem = (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const myNewItem = { id: id, checked: false, item: item };
        const listItems = [...items, myNewItem];
        setAndSaveItems(listItems);
    };

    const handleCheck = (id) => {
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setAndSaveItems(listItems);
    };

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id && item);
        setAndSaveItems(listItems);
    };

    const handleSubmit = (e) => {
        if (!newItem.trim()) return;
        addItem(newItem);
        setNewItem("");
        e.preventDefault();
    };

    return (
        <div className="App">
            <Header title="Groceries List" />
            <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <SearchItem search={search} setSearch={setSearch} />
            <Content
                items={items.filter((item) =>
                    item.item.toLowerCase().includes(search.toLowerCase())
                )}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
            <Footer length={items.length} />
        </div>
    );
}

export default App;
