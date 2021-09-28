import { setupYup } from 'config/yup';

const Yup = setupYup();

export const schema = Yup.object().shape({
  title: Yup.string().required('Campo Título é obrigatório'),
  body: Yup.string().required('Campo Descrição é obrigatório'),
});
