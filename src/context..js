import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
const URL = "https://www.googleapis.com/books/v1/volumes?q=";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("Harry Potter");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try{
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const {items} = data;
            console.log(items)

            if(items){
                const newBooks = items.slice(0, items.length).map((bookSingle) => {
                    const {id, volumeInfo} = bookSingle;
                    // console.log(id)
                    // console.log(volumeInfo.imageLinks["thumbnail"])
                    // console.log(volumeInfo)
                    // console.log(volumeInfo.title)
                    var imageLink = ""
                    try {
                        imageLink = volumeInfo.imageLinks["thumbnail"]
                    } catch(error) {
                        imageLink = undefined
                    }
                    // if (volumeInfo.imageLinks["thumbnail"] == undefined) {
                    //     imageLink = undefined
                    // }
                    // else {
                    //     imageLink = volumeInfo.imageLinks["thumbnail"]
                    // }
                    return {
                        id: id,
                        author : volumeInfo.authors[0],
                        // cover_id: volumeInfo.imageLinks["thumbnail"] ? volumeInfo.imageLinks["thumbnail"]: undefined,
                        cover_id: imageLink,
                        // edition_count: edition_count,
                        // first_publish_year: first_publish_year,
                        title: volumeInfo.title
                        
                    }
                    
                });
                

                setBooks(newBooks);

                if(newBooks.length > 1){
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Search Result Found!")
                }
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
            setLoading(false);
        } catch(error){
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value = {{
            loading, books, setSearchTerm, resultTitle, setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};