import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import DataTable from 'components/DataTable';
import useTable from 'hooks/useTable';
import PostDialog from 'dialogs/PostDialog';
import api from 'services/api';

const columns = [
  {
    name: 'id',
    label: '#ID',
  },
  {
    name: 'title',
    label: 'Título',
  },
  {
    name: 'body',
    label: 'Descrição',
  },
];

const Posts = () => {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState({});

  const { onRefresh, ...dataTableProps } = useTable('posts', {
    onRowClick,
  });

  function onRowClick(row) {
    setOpen(true);
    setPost(row);
  }

  const refreshDataTable = () => {
    onRefresh();
    setPost({});
    setOpen(false);
  };

  const onSubmit = async values => {
    if (typeof values?.id === 'number') {
      const { id, ...form } = values;
      await api.put(`posts/${id}`, form);
    } else {
      await api.post('posts', { userId: 1, ...values });
    }
    refreshDataTable();
  };

  const onRemove = async id => {
    await api.delete(`posts/${id}`);
    refreshDataTable();
  };

  return (
    <Container>
      <DataTable
        title="Listagem de Posts"
        columns={columns}
        {...dataTableProps}
      />
      <PostDialog
        title={post?.id ? 'Atualizar Post' : 'Criar Post'}
        open={open}
        onClose={() => {
          setPost({});
          setOpen(false);
        }}
        onAdd={() => {
          setOpen(true);
        }}
        initialValues={post}
        onSubmit={onSubmit}
        onRemove={onRemove}
      />
    </Container>
  );
};

export default Posts;
