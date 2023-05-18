import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import RenderIndividualBook from './RenderIndividualBook';
import styles from '../styles/bookList.module.css';
import AddNewBook from './AddNewBook';

export default function BookList() {
  const { bookItems } = useSelector((store) => store.books);
  return (
    <>
      <div className={styles.renderContainer}>
        {bookItems.map((item) => <RenderIndividualBook key={item.id} renderData={item} />)}
        <AddNewBook />
      </div>
    </>
  );
}
