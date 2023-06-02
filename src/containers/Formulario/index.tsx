import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcao, Opcoes } from './styles'
import { useDispatch } from 'react-redux'

import * as enums from '../../utils/enums/Tarefa'

import { cadastrar } from '../../store/reducers/tarefa'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          type="text"
          placeholder="Titulo"
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
        />
        <Campo
          as="textarea"
          placeholder="Descrição da tarefa"
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
        />
        <Opcoes>
          <p>Prioridade</p>
          {/* <input
            value={enums.Prioridade.URGENTE}
            type="radio"
            name="prioridade"
            id="urgente"
          />
          <label htmlFor="urgente">Urgente</label>
          <input
            value={enums.Prioridade.IMPORTANTE}
            type="radio"
            name="prioridade"
            id="importante"
          />
          <label htmlFor="importante">Importante</label>
          <input
            value={enums.Prioridade.NORMAL}
            type="radio"
            name="prioridade"
            id="normal"
          />
          <label htmlFor="normal">Normal</label> */}
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
