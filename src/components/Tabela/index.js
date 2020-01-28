import React, { Component } from 'react'
// import { connect } from 'react-redux'

import { useSelector, useDispatch } from 'react-redux'
import * as Actions from '../../store/'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'


import { combineReducers } from 'redux'
import { bindActionCreators } from 'redux'

import './style.css'

export default function Tabela() {
    
    const coment = useSelector(state => state.tabela.coment)
    const dispatch = useDispatch()

    const setComent = (e) =>{
        dispatch({ type: 'SET_COMENT', payload: e.target.value })
    }
    
    return (
        <>
            <div className="corpo">
                <div className="pai">
                    <div className="header">
                        <h2 className="textLogo">ShareMe</h2>
                        <h6 className="my-3">escreva uma publicaçõ e compartilhe em uma das redes sociais abaixo</h6>
                    </div>
                    <div className="public">
                        <h4>Publicar menssagem</h4>
                        <input className="form-control " placeholder="No que você esta pensando ?" value={coment} onChange={setComent} />
                    </div>
                    <hr className="my4" />
                    <div className="sharer">
                        <a href={`https://api.whatsapp.com/send?text=${coment}`} class="button waths"> <FontAwesomeIcon icon={faWhatsapp} size="1x" className="padding"></FontAwesomeIcon>Enviar po Whatsapp</a>
                        <span className="border" />
                        <a href={`https://facebook.com/sharer/sharer.php?u=www.verzel.com.br&quote=${coment}`} className="button face"><FontAwesomeIcon icon={faFacebook} className="padding" size="1x"></FontAwesomeIcon>Facebook </a>
                        <span className="border" />
                        <a href={`https://twitter.com/intent/tweet?url=www.verzel.com.br&text=${coment}`} className="button twitter"><FontAwesomeIcon icon={faTwitter} className="padding" size="1x"></FontAwesomeIcon>Twitter</a>
                    </div>
                </div>
            </div>
        </>
    )

}



// const mapStateToProps = state => ({
//     coment: state.tabela.coment
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//     setComent
// }, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(Tabela)