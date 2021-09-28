import React from 'react';
import DialogForm from 'components/DialogForm';
import PostForm from 'forms/PostForm';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import AddButton from 'components/AddButton';

function UserDialog({
  onSubmit,
  onRemove = () => {},
  initialValues,
  onClose = () => {},
  onAdd = () => {},
  open = false,
  title = 'Criar Post',
}) {
  const isUpdating = Object.keys(initialValues).length > 0;

  return (
    <div>
      <DialogForm title={title} open={open} onClose={onClose}>
        {({ onClose }) => (
          <PostForm
            onSubmit={onSubmit}
            initialValues={initialValues}
            footer={({ submitting }) => (
              <DialogActions
                style={{
                  justifyContent: isUpdating ? 'space-between' : 'flex-end',
                }}
              >
                {!submitting && isUpdating && (
                  <Button
                    onClick={() => onRemove(initialValues?.id)}
                    variant="contained"
                    color="error"
                  >
                    Deletar
                  </Button>
                )}

                <div>
                  {!submitting && (
                    <Button onClick={onClose} color="primary">
                      Cancelar
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    disabled={submitting}
                    type="submit"
                    color="primary"
                  >
                    Enviar
                  </Button>
                </div>
              </DialogActions>
            )}
          />
        )}
      </DialogForm>
      <AddButton onClick={onAdd} />
    </div>
  );
}

export default UserDialog;
