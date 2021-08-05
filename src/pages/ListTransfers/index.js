/* eslint no-underscore-dangle: 0 */
import { useEffect, useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as S from './styles';
import { getTransfers, deleteTranfer } from '../../services/api';
import Loading from '../../components/Loading';

const ListTransfers = () => {
  const [listTransfers, setListTransfers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const transfers = async () => {
    const resp = await getTransfers();
    setListTransfers(resp.data);
    setIsLoading(false);
  };
  useEffect(() => {
    transfers();
  }, []);

  const handleDelete = async (id) => {
    setIsLoading(true);
    await deleteTranfer(id);
    transfers();
    toast.dark('Transferência deletada!');
  };

  return (
    <S.Wrapper>
      {isLoading && <Loading />}
      <S.Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Origem</th>
            <th>Destino</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {listTransfers.map((value) => (
            <tr key={value._id}>
              <td>{value._id}</td>
              <td>{value.origin}</td>
              <td>{value.destination}</td>
              <td>{value.value}</td>
              <td>{new Date(value.date).toLocaleString()}</td>
              <td>
                <Link
                  to="/listTransfers/"
                  onClick={() => handleDelete(value._id)}
                >
                  <FaWindowClose
                    cursor="pointer"
                    color="#c3073f"
                    style={{ marginLeft: '10px' }}
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.Wrapper>
  );
};
export default ListTransfers;
