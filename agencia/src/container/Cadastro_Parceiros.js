import React, { Component, Image } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Modal, Button, Select, Tabs, DatePicker } from 'antd';
import { Input } from 'antd';
import { isCPF, formatToCPF, formatToPhone } from 'brazilian-values';
import moment from 'moment';
import AbaEndereco from '../molecule/AbaEndereco'
import AbaContato from '../molecule/Contato'

const dateFormat = 'DD/MM/YYYY';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;

class CadParceiros extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      select_permission: undefined,
      id: "",
      rz_social: "",
      cnpj: "",
      tp_pessoa: "1",
      status: 1,
      email: "",
      telefone: "",
      fax: "",
      whatsapp: "",
      contato: "",
      fantasia: "",
      nome_red: "",
      cidade_red: "",
      cargo: "",
      clientes: "",
      obs: "",
      insc_est: "",
      cod_cont: "",
      cep: "",
      cod_cidade: "",
      uf: "",
      rua: "",
      bairro: "",
      complemento: "",

      banco: "",
      agencia: "",
      conta: "",
      tp_conta: "",
      dt_cadastro: new Date()

    }

    this.convertData = this.convertData.bind(this)
    this.cadastrar = this.cadastrar.bind(this)

  }

  cadastrar() {
    let dados_cadastro = {
      'id': this.state.id,
      'rz_social': this.state.rz_social,
      'cnpj': this.state.cnpj,
      'tp_pessoa': this.state.tp_pessoa,
      'status': this.state.status,
      'email': this.state.email,
      'telefone': this.state.telefone,
      'fax': this.state.fax,
      'contato': this.state.contato,
      'fantasia': this.state.fantasia,
      'obs': this.state.obs,
      'nome_red': this.state.nome_red,
      'cidade_red': this.state.cidade_red,
      'cargo': this.state.cargo,
      'clientes': this.state.clientes,
      'insc_est': this.state.insc_est,
      'cod_cont': this.state.cod_cont,
      'cep': this.state.cep,
      'cod_cidade': this.state.cod_cidade,
      'estado': this.state.estado,
      'rua': this.state.rua,
      'bairro': this.state.rua,
      'complemento': this.state.complemento,
      'estado': this.state.uf,
      'tp_acesso': 1,
      'whatsapp': this.state.whatsapp,
      'banco': this.state.banco,
      'agencia': this.state.banco,
      'conta': this.state.conta,
      'tp_conta': this.state.tp_conta,
    }

    console.log("Dados de cadastro: ", dados_cadastro)
    fetch('/api/cadastra_parceiro', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'cadastro_parceiro': dados_cadastro,
      })
    })
      .then((r) => r.json())
      .then((json) => {

        if ('id_parceiro' in json) {
          this.setState({ 'cod_parceiro': json.id_parceiro })
          alert("Parceiro cadastrado com sucesso!")
          this.props.callbackModal({ 'novo': false })
        } if ('msg' in json) {
          alert(json.msg)


          // this.setState({visible:false})
          this.props.callbackModal({ 'editar': false })


        }

        else {
          alert(json)
        }



      })
  }


  convertData(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("/");
  }

  CloseModal() {
    this.props.closeModal();
  }


  componentDidMount() {

    if (this.props.parceiro !== undefined) {
      console.log("cod_parceiro: que chegou", this.props.parceiro)
      fetch('/api/carregadadosparceiro', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'consulta_parceiro': this.props.parceiro
        })
      })
        .then((r) => r.json())
        .then((json) => {


          if ('resultado' in json) {
            console.log(json.resultado, "Resultado Recebido-------------")

            this.setState({ id: json.resultado.id })
            this.setState({ rz_social: json.resultado.rz_social })
            this.setState({ email: json.resultado.email })
            this.setState({ telefone: json.resultado.telefone })
            this.setState({ fax: json.resultado.fax })
            this.setState({ tp_pessoa: json.resultado.tp_pessoa.toString() })
            this.setState({ obs: json.resultado.obs })
            this.setState({ cep: json.resultado.cep })
            this.setState({ fantasia: json.resultado.fantasia })
            this.setState({ contato: json.resultado.contato })
            this.setState({ nome_red: json.resultado.nome_red })
            this.setState({ cargo: json.resultado.cargo })
            this.setState({ clientes: json.resultado.clientes })
            this.setState({ cidade_red: json.resultado.cidade_red })
            this.setState({ uf: json.resultado.estado })

            this.setState({ telefone: json.resultado.telefone })
            this.setState({ whatsapp: json.resultado.whatsapp })
            this.setState({ banco: json.resultado.banco })
            this.setState({ agencia: json.resultado.agencia })
            this.setState({ conta: json.resultado.conta })
            this.setState({ tp_conta: json.resultado.tp_conta })




            this.setState({ insc_est: json.resultado.insc_est })
            this.setState({ cnpj: json.resultado.cnpj })
            this.setState({ cod_cont: json.resultado.cod_cont })

            this.setState({ rua: json.resultado.rua })
            this.setState({ bairro: json.resultado.bairro })
            this.setState({ cod_cidade: json.resultado.cod_cidade })
            this.setState({ uf: json.resultado.estado })
            this.setState({ complemento: json.resultado.complemento })

            this.setState({ status: json.resultado.status })

            this.setState({ dt_cadastro: json.resultado.dt_create })




            let dados = {
              id_funcionario: json.resultado.id,
              cep: json.resultado.cep,
              rua: json.resultado.rua,
              bairro: json.resultado.bairro,
              cod_cidade: Number(json.resultado.cod_cidade),
              uf: json.resultado.estado,
              complemento: json.resultado.complemento,
            }
            localStorage.setItem('aba_endereco', JSON.stringify(dados))
            this.setState({ aba_endereco: dados })

            this.setState({ 'visible': true })


          } else {
            alert(json)
          }


        })

    } else {
      this.setState({ botao: "Cadastrar" })
      this.setState({ visible: true })
    }



  }






  render() {
    const shouldBeVisible = this.props.visible;
    return (
      <div>
        <Modal
          width={700}
          title="Cadastro de Parceiros"
          visible={shouldBeVisible}
          onCancel={(e) => this.CloseModal()}
          footer={[
            <Button key="back" onClick={(e) => this.CloseModal()}  >
              Cancelar
            </Button>,
            <Button key="Cadastrar" type="primary" onClick={this.cadastrar}>
              Cadastrar
            </Button>,
          ]}
        >
          <Tabs onChange={console.log()} type="card">
            <TabPane tab="Dados do Parceiro" key="1">
              <table>
                <tr>
                  <th>
                    Tipo Pessoa:<br />
                    <Select
                      labelInValue
                      defaultValue={{ value: '1' }}
                      style={{ width: 190 }}
                      onChange={(e) => { this.setState({ 'select_permission': e }) }}
                    >
                      <Option value="1">Jurídica</Option>
                      <Option value="2">Física</Option>
                    </Select>
                  </th>
                  <th>

                    Data de Cadastro:<br />
                    <DatePicker format={dateFormatList}
                      disabled
                      defaultValue={moment(this.state.dt_cadastro, dateFormat)} format={dateFormat}
                    />

                  </th>
                </tr>
              </table>
              <table>
                <tr>
                  <th>
                    <b>Razão Social:</b>
                    <Input placeholder="Rz. social"
                      defaultValue={this.state.rz_social}
                      onChange={e => this.setState({ "rz_social": e.target.value })}
                    />
                  </th>
                  <th>
                    <b>Fantasia:</b>
                    <Input placeholder="Fantasia"
                      defaultValue={this.state.fantasia}
                      onChange={e => this.setState({ "fantasia": e.target.value })}
                    />
                  </th>
                </tr>
                <tr>
                  <th>
                    <b>Telefone:</b>
                    <Input
                      placeholder="Telefone"
                      defaultValue={this.state.telefone}
                      onChange={e => this.setState({ "telefone": formatToPhone(e.target.value) })} />
                  </th>
                  <th>
                    <b>Whatsapp</b>
                    <Input
                      placeholder="Whatsapp"
                      defaultValue={this.state.whatsapp}
                      onChange={e => this.setState({ "whatsapp": formatToPhone(e.target.value) })} />
                  </th>
                </tr>
                <tr>

                  <th>
                    <b>Nome Red.:</b>
                    <Input placeholder="Nome Red."
                      defaultValue={this.state.nome_red}
                      onChange={e => this.setState({ "nome_red": e.target.value })}
                    />
                  </th>
                  <th>
                    <b>Cidade Red.:</b>
                    <Input placeholder="Cidade Red."
                      defaultValue={this.state.cidade_red}
                      onChange={e => this.setState({ "cidade_red": e.target.value })}
                    />
                  </th>
                </tr>
                <tr>

                  <th>
                    <b>Email:</b>
                    <Input placeholder="Email"
                      defaultValue={this.state.email}
                      onChange={e => this.setState({ "email": e.target.value })}
                    />
                  </th>
                </tr>




                <b>Observação:</b>
                <tr>
                  <th colspan="2">
                    <TextArea rows={4}
                      defaultValue={this.state.obs}
                      onChange={e => this.setState({ "obs": e.target.value })}
                    />
                  </th>
                </tr>
              </table>
            </TabPane>

            <TabPane tab="Endereço" key="3">

              <AbaEndereco callbackFunction={(e) => this.setState(e)} />

            </TabPane>

            <TabPane tab="Documentos" key="4">
              <table>
                <tr>
                  <th>
                    Inscr. Est.:
                    <Input placeholder="Inscr. Est."
                      defaultValue={this.state.insc_est}
                      onChange={e => this.setState({ "insc_est": e.target.value })}
                    />
                  </th>
                  <th>
                    CNPJ:
                    <Input placeholder="CNPJ"
                      defaultValue={this.state.cnpj}
                      onChange={e => this.setState({ "cnpj": e.target.value })}
                    />
                  </th>
                </tr>
                <tr>
                  <th>
                    Cod. Contab.:
                    <Input placeholder="Cod. Contab."
                      defaultValue={this.state.cod_cont}
                      onChange={e => this.setState({ "cod_cont": e.target.value })}
                    />
                  </th>
                </tr>

              </table>
            </TabPane>

            <TabPane tab="Dados Bancarios" key="5">

              <table>
                <tr>
                  <th>
                    Banco:
                    <Input placeholder="Banco"
                      defaultValue={this.state.banco}
                      onChange={e => this.setState({ "banco": e.target.value })}
                    />
                  </th>
                  <th>
                    Agência:
                    <Input placeholder="Agência"
                      defaultValue={this.state.agencia}
                      onChange={e => this.setState({ "agencia": e.target.value })}
                    />
                  </th>
                </tr>
                <tr>
                  <th>
                    Conta:
                    <Input placeholder="Conta"
                      defaultValue={this.state.conta}
                      onChange={e => this.setState({ "conta": e.target.value })}
                    />
                  </th>
                  <th>
                    Tipo Conta:
                    <Input placeholder="Tipo Conta"
                      defaultValue={this.state.tp_conta}
                      onChange={e => this.setState({ "tp_conta": e.target.value })}
                    />
                  </th>
                </tr>

              </table>
            </TabPane>
            <TabPane tab="Contato" key="6">
              <AbaContato />
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    );
  }
}

export default CadParceiros;


