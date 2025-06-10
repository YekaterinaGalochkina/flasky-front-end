import Cat from './Cat.jsx';

const CatList = (props) => {
    return (
        <>
          <h1>Cat List</h1>
            <ul>
              <Cat ></Cat>
              <Cat></Cat>
              <Cat></Cat>
              <Cat></Cat>
            </ul>
        </>
    );
};

export default CatList;