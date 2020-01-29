import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Container, Content, Title, Coment, Sharer } from '../../styles'
import './style.css'

const Tabela = () => {  
    
    const coment = useSelector(state => state.tabela.coment)
    const dispatch = useDispatch()
    const setComent = (e) =>{
        dispatch({ type: 'SET_COMENT', payload: e.target.value })
    }  
    return (
        <>
            <Container>
                <Content>
                    <Title>
                        <h1>ShareMe</h1>
                        <h6 className="my-3">escreva uma publicaçõ e compartilhe em uma das redes sociais abaixo</h6>
                    </Title>
                    <Coment>
                        <h4>Publicar menssagem</h4>
                        <input className="form-control " placeholder="No que você esta pensando ?" value={coment} onChange={setComent} />
                    </Coment>
                    <hr className="my4" />
                    <Sharer>
                        <a href={`https://api.whatsapp.com/send?text=${coment}`} class="button waths"> <FontAwesomeIcon icon={faWhatsapp} size="1x" className="padding"></FontAwesomeIcon>Enviar po Whatsapp</a>
                        <span className="border" />
                        <a href={`https://facebook.com/sharer/sharer.php?u=www.verzel.com.br&quote=${coment}`} className="button face"><FontAwesomeIcon icon={faFacebook} className="padding" size="1x"></FontAwesomeIcon>Facebook </a>
                        <span className="border" />
                        <a href={`https://twitter.com/intent/tweet?url=www.verzel.com.br&text=${coment}`} className="button twitter"><FontAwesomeIcon icon={faTwitter} className="padding" size="1x"></FontAwesomeIcon>Twitter</a>
                    </Sharer>
                </Content>
            </Container>
        </>
    )
}
export default Tabela



