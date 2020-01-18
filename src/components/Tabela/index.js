import React, { Component } from 'react'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'


import { combineReducers } from 'redux'
import { setNumber, setComent } from '../../action/tabela-action'
import { bindActionCreators } from 'redux'

import './style.css'

class Tabela extends Component {
    render() {

        const { coment, setComent } = this.props

        return (
            <>
                <div className="corpo">
                    <div className="pai">
                            <h2 className="textLogo">ShareMe</h2>
                        <div className="public">
                            <h4>Publicar menssagem</h4>
                            <small className="my-3">escreva uma publicaçõ e compartilhe em uma das redes sociais abaixo</small>
                            <textarea rows="5" placeholder="No que você esta pensando ?" value={coment} onChange={setComent} />
                        </div>
                        <hr className="my2" />
                        <h5>Compartilhe em suas redes</h5>
                        <div className="sharer">
                            <a href={`https://api.whatsapp.com/send?text=${coment}`} class="btn text-success"> <FontAwesomeIcon icon={faWhatsapp} size="1x"></FontAwesomeIcon>Compartilhar</a>
                            <a href={`https://facebook.com/sharer/sharer.php?u=www.verzel.com.br&quote=${coment}`} class=" btn text-primary     "><FontAwesomeIcon icon={faFacebook} size="1x"></FontAwesomeIcon>Compartilhar </a>
                            <a href={`https://twitter.com/intent/tweet?url=www.verzel.com.br&text=${coment}`} class=" btn text-primary  "><FontAwesomeIcon icon={faTwitter} size="1x"></FontAwesomeIcon>Compartilhar</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}



const mapStateToProps = state => ({
    coment: state.tabela.coment
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setComent
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Tabela)