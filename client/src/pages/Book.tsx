import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Book as IBook } from '../interfaces';
import { configAxios } from '../utils/configAxios';

export const Book = () => {
  // const token = localStorage.getItem('token');
  // if (!token) return;
  // const config = configAxios(token);
  const [book, setBook] = useState<IBook>({} as IBook);

  const param = useParams();

  useEffect(() => {
    const getBook = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_URL_BACK}/book/${param.id}`
      );
      console.log(data);
      setBook(data);
    };
    getBook();
  }, []);

  return (
    <main className="h-screen">
      <div className="md:flex md:border-b md:mx-2 lg:p-20">
        <div className="flex justify-center mt-3 p-1 border-b place-items-start md:border-none">
          <img className="w-80 md:h-auto" src={book.image} alt={book.name} />
        </div>
        <div className="md:w-full">
          <div className="first:p-3 m-2 border-b border-b-slate-400 md:flex md:flex-col">
            <h1 className="first:text-center text-3xl text-amber-800">
              {book.name}
            </h1>
            <p className="my-2">{book.author}</p>
            <p className="first-letter:uppercase mb-5 px-2 text-slate-700">
              {book.review}
            </p>
          </div>
          <div className="m-2 border-b border-b-slate-400 pb-2">
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold text-orange-600 px-3">
                ${book.price}
              </h2>
              {book.stock > 0 ? (
                <div>
                  <p className="text-green-600">There is stock!</p>
                  <p>
                    Stock:{' '}
                    <span className="font-bold text-slate-700">
                      {book.stock}
                    </span>
                  </p>
                </div>
              ) : (
                <p className="font-bold text-red-700">Without stock</p>
              )}
            </div>
            <button className="bg-blue-600 text-white p-2 rounded-sm border border-blue-900">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <MetadataBook metadata={book.metadata} />
    </main>
  );
};

const MetadataBook = ({ metadata }: any) => {
  if (metadata && metadata.pages) {
    return (
      <section className="mx-2">
        <h2 className="text-xl">Details</h2>
        <table className="flex border border-orange-400  bg-orange-200 ">
          <thead>
            <tr className="flex flex-col justify-between">
              <th className="border-r border-r-orange-400 border-b border-b-orange-400 px-2 py-1">
                Pages
              </th>
              <th className="border-r border-r-orange-400 border-b border-b-orange-400 px-2 py-1">
                Publisher
              </th>
              <th className="border-r border-r-orange-400 border-b border-b-orange-400 px-2 py-1">
                Language
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            <tr className="flex flex-col ">
              <td className="border-r border-r-orange-400 border-b border-b-orange-400 px-2 py-1">
                {metadata.pages}
              </td>
              <td className="border-r border-r-orange-400 border-b border-b-orange-400 px-2 py-1">
                {metadata.publisher}
              </td>
              <td className="border-r border-r-orange-400 border-b border-b-orange-400 px-2 py-1">
                {metadata.language}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  } else {
    return <p>There is no metadata yet</p>;
  }
};
