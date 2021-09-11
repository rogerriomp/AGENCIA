import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Modal, Button, Select, Tabs, Table, DatePicker, Checkbox, Radio, Space, InputNumber, AutoComplete } from 'antd';
import { Input } from 'antd';
import moment from 'moment';
import { isCPF, formatToCPF, formatToPhone } from 'brazilian-values';

const { Option } = Select;
const { TabPane } = Tabs;
const yearFormat = 'YYYY';
const dateFormat = 'DD/MM/YYYY';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const { TextArea } = Input;

const columns = [
  {
    title: 'Colocação',
    width: 250,
    dataIndex: 'colocacao',
    fixed: "left",
  },
  {
    title: '1',
    dataIndex: 'um',
  },
  {
    title: '2',
    dataIndex: 'dois',
  },
  ,
  {
    title: '3',
    dataIndex: 'tres',
  },
  ,
  {
    title: '4',
    dataIndex: 'quatro',
  },
  ,
  {
    title: '5',
    dataIndex: 'cinco',
  },
  ,
  {
    title: '6',
    dataIndex: 'seis',
  },
  ,
  {
    title: '7',
    dataIndex: 'sete',
  },
  ,
  {
    title: '8',
    dataIndex: 'oito',
  },
  ,
  {
    title: '9',
    dataIndex: 'nove',
  },
  ,
  {
    title: '10',
    dataIndex: 'dez',
  },
  ,
  {
    title: '11',
    dataIndex: 'onze',
  },
  ,
  {
    title: '12',
    dataIndex: 'doze',
  },
  ,
  {
    title: '13',
    dataIndex: 'treze',
  },
  ,
  {
    title: '14',
    dataIndex: 'quatorze',
  },
  ,
  {
    title: '15',
    dataIndex: 'quinze',
  },
  ,
  {
    title: '16',
    dataIndex: 'dezesseis',
  },
  ,
  {
    title: '17',
    dataIndex: 'dezessete',
  },
  ,
  {
    title: '18',
    dataIndex: 'dezoito',
  },
  ,
  {
    title: '19',
    dataIndex: 'dezenove',
  },
  ,
  {
    title: '20',
    dataIndex: 'vinte',
  },
  ,
  {
    title: '21',
    dataIndex: 'vinte_um',
  },
  ,
  {
    title: '22',
    dataIndex: 'vinte_dois',
  },
  ,
  {
    title: '23',
    dataIndex: 'vinte_tres',
  },
  ,
  {
    title: '24',
    dataIndex: 'vinte_quatro',
  },
  ,
  {
    title: '25',
    dataIndex: 'vinte_cinco',
  },
  ,
  {
    title: '26',
    dataIndex: 'vinte_seis',
  },
  ,
  {
    title: '27',
    dataIndex: 'vinte_sete',
  },
  ,
  {
    title: '28',
    dataIndex: 'vinte_oito',
  },
  ,
  {
    title: '29',
    dataIndex: 'vinte_nove',
  },
  ,
  {
    title: '30',
    dataIndex: 'trinta',
  },
  ,
  {
    title: '31',
    dataIndex: 'trinta_um',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    fixed: "right",
  },

];

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

class Tabela2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cod_mapa_pi: null,
      visible: true,
      select_permission: undefined,
      selectedRows: [],
      dataSource: [],
      valores: [],
      agencias: [],
      anunciantes: [],
      veiculos: [],
      numero_agencia: "",
      dt_emissao: new Date(),
      year: new Date(),
      periodo: 0,
      colocacao: "",
      agencia: "",
      anunciante: "",
      veiculo: "",
      servico: "",
      campanha: "",
      produto: "",
      titulo: "",
      dt_vencimento: new Date(),
      observacao: "",
      nota_fiscal: "",
      saac: "",
      empenho: "",
      faturamento_expansao: false,
      faturamento_veiculo: false,
      mapa_de_programacao: false,
      imprimir: 1,
      faturar: 1,
      total: 0,
      valor_total: 0.0,
      valor_bruto: 0.0,
      valor_normal: 0.0,
      valor_liquido: 0.0,
      comissao: 0,
      valor_comissao: 0.0,
      comissao_normal: 0,
      valor_comissao_normal: 0.0,
      comissao_parceiro: 0,
      valor_comissao_parceiro: 0.0,
    }
    this.incluir = this.incluir.bind(this)
    this.excluir = this.excluir.bind(this)
  }

  CloseModal() {
    this.props.closeModal();
  }

  cadastrar() {
    let dados_cadastro = {
      'id': this.state.cod_mapa_pi,
      'numero_agencia': this.state.numero_agencia,
      'dt_emissao': moment(this.state.dt_emissao).format(dateFormat),
      'periodo': this.state.periodo,
      'ano': moment(this.state.year).format(yearFormat),
      'cod_agencia': this.state.agencia,
      'cod_anunciante': this.state.anunciante,
      'cod_veiculo': this.state.veiculo,
      'servico': this.state.servico,
      'colocacoes': this.state.dataSource,
      'campanha': this.state.campanha,
      'produto': this.state.produto,
      'titulo': this.state.titulo,
      'dt_vencimento': moment(this.state.dt_vencimento).format(dateFormat),
      'observacao': this.state.observacao,
      'nota_fiscal': this.state.nota_fiscal,
      'saac': this.state.saac,
      'empenho': this.state.empenho,
      'fat_expansao': this.state.faturamento_expansao,
      'fat_veiculo': this.state.faturamento_veiculo,
      'mapa_prog': this.state.mapa_de_programacao,
      'imprimir': this.state.imprimir,
      'faturar': this.state.faturar,
      'valor_total': this.state.valor_total,
      'valor_bruto': this.state.valor_bruto,
      'comissao_ag': this.state.comissao,
      'valor_comissao': this.state.valor_comissao,
      'valor_normal': this.state.valor_normal,
      'comissao': this.state.comissao_normal,
      'valor_comissao_normal': this.state.valor_comissao_normal,
      'valor_liquido': this.state.valor_liquido,
    }

    console.log(JSON.stringify({
      'cadastro_mapa': dados_cadastro,
    }))

    fetch('/api/cadastromapapi', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'cadastro_mapa': dados_cadastro,
      })
    })
      .then((r) => r.json())
      .then((json) => {
        if ('return' in json) {
          alert("Mapa cadastrado com sucesso!")
          this.props.callbackModal({ 'novo': false })
        } if ('msg' in json) {
          alert(json.msg)
          this.props.callbackModal({ 'editar': false })
        } else {
          alert(json)
        }
      })
  }

  excluir() {
    let dados = this.state.dataSource
    this.state.selectedRows.map(x => {
      let index = dados.indexOf(x);
      console.log(index)
      dados.splice(index, 1);
    })
    this.setState({ dataSource: [...dados] })
    this.setState({ selectedRows: [] })
  }

  onSelectChange = (selectedRowKeys, selectedRows) => {
    this.setState({ selectedRows });
  }

  onChangeSetValueAndCalculateTotal(key, value) {
    let total = 0
    this.state.valores[parseInt(key)] = parseInt(value);
    for (let i = 1; i < this.state.valores.length; i++) {
      total += this.state.valores[i] === undefined ? 0 : this.state.valores[i];
    }
    this.setState({ total: total })
  }

  onChangeSetValorBruto(value) {
    this.setState({ valor_total: parseFloat(value), valor_bruto: parseFloat(value) })
    this.onChangeSetValorComissao(this.state.comissao, parseFloat(value))
  }

  onChangeSetValorComissao(value, valorTotal) {
    let totalComissao = parseInt(value) * valorTotal / 100
    this.setState({ comissao: value })
    this.onChangeSetValorNormal(parseFloat(totalComissao), valorTotal)
  }

  onChangeSetValorNormal(value, valorTotal) {
    this.setState({ valor_comissao: parseFloat(value), valor_normal: valorTotal - parseFloat(value) })
    this.onChangeSetValorComissaoNormal(this.state.comissao_normal, valorTotal - parseFloat(value))
  }

  onChangeSetValorComissaoNormal(value, valorTotal) {
    let totalComissao = parseInt(value) * valorTotal / 100
    this.setState({ comissao_normal: value })
    this.onChangeSetValorLiquido(parseFloat(totalComissao), valorTotal)
  }

  onChangeSetValorLiquido(value, valorTotal) {
    console.log(valorTotal)
    this.setState({ valor_comissao_normal: parseFloat(value), valor_liquido: valorTotal - parseFloat(value) })
    this.onChangeSetValorComissaoParceiro(this.state.comissao_parceiro, parseFloat(value))
  }

  onChangeSetValorComissaoParceiro(value, valorTotal) {
    let totalComissao = parseInt(value) * valorTotal / 100
    this.setState({ comissao_parceiro: value })
    this.setState({ valor_comissao_parceiro: parseFloat(totalComissao) })
  }

  incluir() {
    var defaultValue = 0
    let row = {
      colocacao: this.state.colocacao,
      um: (this.state.valores[1] === undefined) ? defaultValue : this.state.valores[1],
      dois: (this.state.valores[2] === undefined) ? defaultValue : this.state.valores[2],
      tres: (this.state.valores[3] === undefined) ? defaultValue : this.state.valores[3],
      quatro: (this.state.valores[4] === undefined) ? defaultValue : this.state.valores[4],
      cinco: (this.state.valores[5] === undefined) ? defaultValue : this.state.valores[5],
      seis: (this.state.valores[6] === undefined) ? defaultValue : this.state.valores[6],
      sete: (this.state.valores[7] === undefined) ? defaultValue : this.state.valores[7],
      oito: (this.state.valores[8] === undefined) ? defaultValue : this.state.valores[8],
      nove: (this.state.valores[9] === undefined) ? defaultValue : this.state.valores[9],
      dez: (this.state.valores[10] === undefined) ? defaultValue : this.state.valores[10],
      onze: (this.state.valores[11] === undefined) ? defaultValue : this.state.valores[11],
      doze: (this.state.valores[12] === undefined) ? defaultValue : this.state.valores[12],
      treze: (this.state.valores[13] === undefined) ? defaultValue : this.state.valores[13],
      quatorze: (this.state.valores[14] === undefined) ? defaultValue : this.state.valores[14],
      quinze: (this.state.valores[15] === undefined) ? defaultValue : this.state.valores[15],
      dezesseis: (this.state.valores[16] === undefined) ? defaultValue : this.state.valores[16],
      dezessete: (this.state.valores[17] === undefined) ? defaultValue : this.state.valores[17],
      dezoito: (this.state.valores[18] === undefined) ? defaultValue : this.state.valores[18],
      dezenove: (this.state.valores[19] === undefined) ? defaultValue : this.state.valores[19],
      vinte: (this.state.valores[20] === undefined) ? defaultValue : this.state.valores[20],
      vinte_um: (this.state.valores[21] === undefined) ? defaultValue : this.state.valores[21],
      vinte_dois: (this.state.valores[22] === undefined) ? defaultValue : this.state.valores[22],
      vinte_tres: (this.state.valores[23] === undefined) ? defaultValue : this.state.valores[23],
      vinte_quatro: (this.state.valores[24] === undefined) ? defaultValue : this.state.valores[24],
      vinte_cinco: (this.state.valores[25] === undefined) ? defaultValue : this.state.valores[25],
      vinte_seis: (this.state.valores[26] === undefined) ? defaultValue : this.state.valores[26],
      vinte_sete: (this.state.valores[27] === undefined) ? defaultValue : this.state.valores[27],
      vinte_oito: (this.state.valores[28] === undefined) ? defaultValue : this.state.valores[28],
      vinte_nove: (this.state.valores[29] === undefined) ? defaultValue : this.state.valores[29],
      trinta: (this.state.valores[30] === undefined) ? defaultValue : this.state.valores[30],
      trinta_um: (this.state.valores[31] === undefined) ? defaultValue : this.state.valores[31],
      total: this.state.total,
    }

    const { dataSource } = this.state;
    this.setState({ dataSource: [...dataSource, row] })

    console.log(this.state, '----- dados row')
  }


  render() {
    const shouldBeVisible = this.props.visible;
    const { loading, selectedRows, dataSource } = this.state;
    const rowSelection = {
      selectedRows,
      onChange: this.onSelectChange,
    };

    const handleSearchAgencia = (value) => {
      fetch('/api/consulta_agencia', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'consulta_agencia': { 'nome': value },
        })
      })
        .then((r) => r.json())
        .then((json) => {
          var dados = json.funcionarios.map(person => {
            return {
              key: person.key,
              value: person.key + ' - ' + person.nome,
              label: (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>
                    {person.nome}
                  </span>
                </div>
              ),
            }
          });

          this.setState({ agencias: dados })
        })
    };
    const onSelectAgencia = (value, option) => {
      this.setState({ agencia: option.key })
    };

    const handleSearchAnunciante = (value) => {
      fetch('/api/consulta_anunciante', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'consulta_anunciante': { 'nome': value },
        })
      })
        .then((r) => r.json())
        .then((json) => {
          var dados = json.anunciantes.map(anunciante => {
            return {
              value: anunciante.key + ' - ' + anunciante.nome,
              key: anunciante.key,
              label: (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>
                    {anunciante.nome}
                  </span>
                </div>
              ),
            }
          });

          this.setState({ anunciantes: dados })
        })
    };
    const onSelectAnunciante = (value, option) => {
      this.setState({ anunciante: option.key })
    };
    const handleSearchVeiculo = (value) => {
      fetch('/api/consulta_veiculo', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'consulta_veiculo': { 'nome': value },
        })
      })
        .then((r) => r.json())
        .then((json) => {
          var dados = json.veiculos.map(veiculo => {
            return {
              key: veiculo.key,
              value: veiculo.key + ' - ' + veiculo.nome,
              label: (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>
                    {veiculo.nome}
                  </span>
                </div>
              ),
            }
          });

          this.setState({ veiculos: dados })
        })
    };
    const onSelectVeiculo = (value, option) => {
      this.setState({ veiculo: option.key })
    };
    return (
      <div>
        <Modal
          width={1000}
          title="Cadastro de Mapa de Programação"
          visible={shouldBeVisible}
          onCancel={(e) => this.CloseModal()}
          footer={[
            <Button key="back" onClick={(e) => this.CloseModal()}>
              Cancelar
            </Button>,
            <Button key="Cadastrar" type="primary" onClick={(e) => this.cadastrar()}>
              Cadastrar
            </Button>,
          ]}>
          <Tabs onChange={console.log()} type="card">
            <TabPane tab="Dados básicos" key="1">
              <table>
                <tr>
                  <th>
                    Número da Agência: <br />
                    <Input
                      style={{ width: 220 }}
                      defaultValue={this.state.desc}
                      onChange={(e) => { this.setState({ "numero_agencia": e.target.value }) }}
                      placeholder="Número da Agência" />
                  </th>
                  <th>
                    Emissão: <br />
                    <DatePicker format={dateFormatList}
                      defaultValue={moment(this.state.dt_emissao, dateFormat)} format={dateFormat}
                      onChange={(e) => { (e != null) ? this.setState({ "dt_emissao": moment(e) }) : this.setState({ "dt_emissao": "" }) }}
                    />
                  </th>
                </tr>
                <tr>
                  <th>
                    Período: <br />
                    <Select
                      showSearch
                      style={{ width: 220 }}
                      placeholder="Período"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                      onChange={(e) => { this.setState({ "periodo": e }) }}
                    >
                      <Option value="1">Janeiro</Option>
                      <Option value="2">Fevereiro</Option>
                      <Option value="3">Março</Option>
                      <Option value="4">Abril</Option>
                      <Option value="5">Maio</Option>
                      <Option value="6">Junho</Option>
                      <Option value="7">Julho</Option>
                      <Option value="8">Agosto</Option>
                      <Option value="9">Setembro</Option>
                      <Option value="10">Outubro</Option>
                      <Option value="11">Novembro</Option>
                      <Option value="12">Dezembro</Option>
                    </Select>
                  </th>
                  <th>
                    Ano: <br />
                    <DatePicker
                      defaultValue={moment(this.state.year, yearFormat)} format={yearFormat} picker="year"
                      onChange={(e) => { (e != null) ? this.setState({ "year": moment(e) }) : this.setState({ "year": "" }) }} />
                  </th>
                </tr>
              </table>
              <table>
                <tr>
                  <th>
                    Agência: <br />
                    <AutoComplete
                      dropdownMatchSelectWidth={252}
                      style={{
                        width: 430,
                      }}
                      options={this.state.agencias}
                      onSelect={onSelectAgencia}
                      onSearch={handleSearchAgencia}>
                      <Input.Search size="large" placeholder="Agência" enterButton />
                    </AutoComplete>
                  </th>
                </tr>
                <tr>
                  <th>
                    Anunciante: <br />
                    <AutoComplete
                      dropdownMatchSelectWidth={252}
                      style={{
                        width: 430,
                      }}
                      options={this.state.anunciantes}
                      onSelect={onSelectAnunciante}
                      onSearch={handleSearchAnunciante}
                      optionLabelProp="title">
                      <Input.Search size="large" placeholder="Anunciante" enterButton />
                    </AutoComplete>
                  </th>
                </tr>
                <tr>
                  <th>
                    Veículo: <br />
                    <AutoComplete
                      dropdownMatchSelectWidth={252}
                      style={{
                        width: 430,
                      }}
                      options={this.state.veiculos}
                      onSelect={onSelectVeiculo}
                      onSearch={handleSearchVeiculo}>
                      <Input.Search size="large" placeholder="Veículo" enterButton />
                    </AutoComplete>
                  </th>
                </tr>
                <tr>
                  <th>
                    Serviço: <br />
                    <TextArea
                      style={{ width: 440 }}
                      defaultValue={this.state.servico}
                      onChange={(e) => { this.setState({ "servico": e.target.value }) }}
                      rows={4} />
                  </th>
                </tr>
              </table>
            </TabPane>
            <TabPane tab="Dados das Colocações" key="2">
              <div style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                <table>
                  <tr>
                    <th>
                      Colocação: <br />
                      <Input
                        style={{ width: 430 }}
                        defaultValue={this.state.colocacao}
                        onChange={(e) => { this.setState({ "colocacao": e.target.value }) }}
                        placeholder="Colocação" />
                    </th>
                  </tr>
                </table>
              </div>
              <div style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                <table>
                  <tr>
                    <th style={{ "text-align": "center" }}>
                      1<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[1]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(1, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="1" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      2<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[2]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(2, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="2" />
                    </th>
                    <th style={{ "text-align": "center" }}>
                      3<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[3]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(3, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="3" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      4<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[4]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(4, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="4" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      5<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[5]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(5, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="5" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      6<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[6]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(6, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="6" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      7<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[7]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(7, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="7" />

                    </th>
                  </tr>
                  <tr>
                    <th style={{ "text-align": "center" }}>
                      8<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[8]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(8, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="8" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      9<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[9]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(9, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="9" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      10<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[10]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(10, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="10" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      11<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[11]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(11, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="11" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      12<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[12]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(12, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="12" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      13<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[13]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(13, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="13" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      14<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[14]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(14, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="14" />

                    </th>
                  </tr>
                  <tr>
                    <th style={{ "text-align": "center" }}>
                      15<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[15]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(15, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="15" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      16<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[16]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(16, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="16" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      17<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[17]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(17, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="17" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      18<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[18]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(18, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="18" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      19<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[19]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(19, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="19" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      20<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[20]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(20, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="20" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      21<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[21]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(21, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="21" />

                    </th>
                  </tr>
                  <tr>
                    <th style={{ "text-align": "center" }}>
                      22<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[22]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(22, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="22" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      23<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[23]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(23, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="23" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      24<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[24]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(24, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="24" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      25<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[25]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(25, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="25" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      26<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[26]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(26, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="26" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      27<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[27]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(27, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="27" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      28<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[28]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(28, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="28" />

                    </th>
                  </tr>
                  <tr>
                    <th style={{ "text-align": "center" }}>
                      29<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[29]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(29, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="29" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      30<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[30]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(30, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="30" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      31<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.valores[31]}
                        onChange={(e) => { this.onChangeSetValueAndCalculateTotal(31, ((e.target.value === "") ? 0 : e.target.value)) }}
                        placeholder="31" />

                    </th>
                    <th style={{ "text-align": "center" }}>
                      Total<br />
                      <Input
                        type="number" min="0"
                        style={{ width: 60, textAlign: "center" }}
                        defaultValue={this.state.total}
                        value={this.state.total}
                        disabled
                        placeholder="0" />
                    </th>
                  </tr>
                </table>
              </div>
              <div style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                <table>
                  <tr />
                  <tr>
                    <th><Button key="excluir" onClick={this.excluir}>
                      Excluir
                    </Button>
                      <Button key="inserir" onClick={this.incluir}>
                        Inserir
                      </Button></th>
                  </tr>
                </table>
              </div>
              <div>

                <Table
                  scroll={{ x: 3000 }}
                  rowSelection={rowSelection} columns={columns} dataSource={dataSource}
                  rowKey={row => row.colocacao}
                  rowClassName={() => 'editable-row'} />
              </div>
            </TabPane>
            <TabPane tab="Dados da Campanha" key="3">
              <table>
                <tr>
                  <th>
                    Campanha: <br />
                    <Input
                      style={{ width: 440 }}
                      defaultValue={this.state.campanha}
                      onChange={(e) => { this.setState({ "campanha": e.target.value }) }}
                      placeholder="Campanha" />
                  </th>
                </tr>
              </table>
              <table>
                <tr>
                  <th>
                    Produto: <br />
                    <Input
                      style={{ width: 220 }}
                      defaultValue={this.state.produto}
                      onChange={(e) => { this.setState({ "produto": e.target.value }) }}
                      placeholder="Produto" />
                  </th>
                  <th>
                    Título: <br />
                    <Input
                      style={{ width: 218 }}
                      defaultValue={this.state.titulo}
                      onChange={(e) => { this.setState({ "titulo": e.target.value }) }}
                      placeholder="Titulo" />
                  </th>
                </tr>
              </table>
              <table>
                <tr>
                  <th>
                    Vencimento: <br />
                    <DatePicker format={dateFormatList}
                      defaultValue={moment(this.state.dt_vencimento, dateFormat)} format={dateFormat}
                      onChange={(e) => { (e != null) ? this.setState({ "dt_vencimento": moment(e) }) : this.setState({ "dt_vencimento": "" }) }}
                    />
                  </th>
                </tr>
              </table>
              <table>
                <tr>
                  <th>
                    Observações: <br />
                    <TextArea
                      style={{ width: 440 }}
                      defaultValue={this.state.observacao}
                      onChange={(e) => { this.setState({ "observacao": e.target.value }) }}
                      rows={4} />
                  </th>
                </tr>
              </table>
            </TabPane>
            <TabPane tab="Dados de Faturamento" key="4">
              <table>

                <tr>
                  <th>
                    Nota Fiscal: <br />
                    <Input
                      style={{ width: 220 }}
                      defaultValue={this.state.nota_fiscal}
                      onChange={(e) => { this.setState({ "nota_fiscal": e.target.value }) }}
                      placeholder="Nota Fiscal" />
                  </th>
                  <th>
                    SAAC: <br />
                    <Input
                      style={{ width: 218 }}
                      defaultValue={this.state.saac}
                      onChange={(e) => { this.setState({ "saac": e.target.value }) }}
                      placeholder="SAAC" />
                  </th>
                </tr>
                <tr>
                  <th>
                    Empenho: <br />
                    <Input
                      style={{ width: 220 }}
                      defaultValue={this.state.empenho}
                      onChange={(e) => { this.setState({ "empenho": e.target.value }) }}
                      placeholder="Empenho" />
                  </th>
                </tr>
              </table>
              <table style={{ marginTop: '20px' }}>
                <tr>
                  <th>
                    <Checkbox
                      checked={this.state.faturamento_expansao}
                      onChange={(e) => { this.setState({ "faturamento_expansao": e.target.checked }) }}>Faturamento Expansão</Checkbox>
                  </th>
                  <th>
                    <Checkbox
                      checked={this.state.faturamento_veiculo}
                      onChange={(e) => { this.setState({ "faturamento_veiculo": e.target.checked }) }}>Faturamento Veículo</Checkbox>
                  </th>
                  <th>
                    <Checkbox
                      checked={this.state.mapa_de_programacao}
                      onChange={(e) => { this.setState({ "mapa_de_programacao": e.target.checked }) }}>Mapa de Programação</Checkbox>
                  </th>
                </tr>
              </table>
              <table style={{ marginTop: '20px' }}>
                <tr>
                  <th>
                    Imprimir pelo: <br />
                    <Radio.Group onChange={(e) => { this.setState({ "imprimir": e.target.value }) }} value={this.state.imprimir}>
                      <Radio.Button value={1}>Bruto</Radio.Button>
                      <Radio.Button value={2}>Com Ag</Radio.Button>
                      <Radio.Button value={3}>Normal</Radio.Button>
                      <Radio.Button value={4}>Comissão</Radio.Button>
                      <Radio.Button value={5}>Líquido</Radio.Button>
                    </Radio.Group>
                  </th>
                </tr>
                <tr>
                  <th>
                    Faturar pelo: <br />
                    <Radio.Group onChange={(e) => { this.setState({ "faturar": e.target.value }) }} value={this.state.faturar}>
                      <Radio.Button value={1}>Bruto</Radio.Button>
                      <Radio.Button value={3}>Normal</Radio.Button>
                      <Radio.Button value={5}>Líquido</Radio.Button>
                    </Radio.Group>
                  </th>
                </tr>
              </table>
            </TabPane>
            <TabPane tab="Valores" key="5">
              <table>
                <tr>
                  <th>
                    Valor Total R$<br />
                    <InputNumber
                      type="number" min="0"
                      precision="2"
                      style={{ width: 100, textAlign: "center" }}
                      defaultValue={this.state.valor_total}
                      onChange={(e) => { this.onChangeSetValorBruto(e) }}
                      placeholder="0,00" />
                  </th>
                </tr>
                <tr>
                  <th>
                    Valor Bruto R$<br />
                    <InputNumber
                      type="number"
                      precision="2"
                      disabled
                      style={{ width: 100, textAlign: "center" }}
                      value={this.state.valor_bruto}
                      defaultValue={this.state.valor_bruto}
                      placeholder="0,00" />
                  </th>
                </tr>
                <tr>
                  <th>
                    Comissão Ag %<br />
                    <InputNumber
                      type="number" min="0" max="100"
                      style={{ width: 100, textAlign: "center" }}
                      defaultValue={this.state.comissao}
                      value={this.state.comissao}
                      onChange={(e) => { this.onChangeSetValorComissao(e, this.state.valor_total) }}
                      placeholder="100%" />
                  </th>
                  <th>
                    Comissão Ag R$<br />
                    <InputNumber
                      type="number" min="0"
                      precision="2"
                      style={{ width: 100, textAlign: "center" }}
                      defaultValue={this.state.valor_comissao}
                      value={this.state.valor_comissao}
                      onChange={(e) => { this.onChangeSetValorNormal(e, this.state.valor_total) }}
                      placeholder="0,00" />
                  </th>
                </tr>
                <tr>
                  <th>
                    Valor Normal R$<br />
                    <InputNumber
                      type="number"
                      precision="2"
                      disabled
                      style={{ width: 100, textAlign: "center" }}
                      value={this.state.valor_normal}
                      defaultValue={this.state.valor_normal}
                      placeholder="0,00" />
                  </th>
                </tr>
                <tr>
                  <th>
                    Comissão %<br />
                    <InputNumber
                      type="number" min="0" max="100"
                      style={{ width: 100, textAlign: "center" }}
                      defaultValue={this.state.comissao_normal}
                      value={this.state.comissao_normal}
                      onChange={(e) => { this.onChangeSetValorComissaoNormal(e, this.state.valor_normal) }}
                      placeholder="100%" />
                  </th>
                  <th>
                    Comissão R$<br />
                    <InputNumber
                      type="number" min="0"
                      precision="2"
                      style={{ width: 100, textAlign: "center" }}
                      defaultValue={this.state.valor_comissao_normal}
                      value={this.state.valor_comissao_normal}
                      onChange={(e) => { this.onChangeSetValorLiquido(e, this.state.valor_normal) }}
                      placeholder="0,00" />
                  </th>
                </tr>
                <tr>
                  <th>
                    Valor Líquido R$<br />
                    <InputNumber
                      type="number"
                      precision="2"
                      disabled
                      style={{ width: 100, textAlign: "center" }}
                      value={this.state.valor_liquido}
                      defaultValue={this.state.valor_liquido}
                      placeholder="0,00" />
                  </th>
                </tr>
                {/* <tr>
                  <th>
                    Comissão Parceiro %<br />
                    <InputNumber
                      type="number" min="0"  max="100"
                      style={{ width: 100, textAlign: "center" }}
                      defaultValue={this.state.comissao_parceiro}
                      value={this.state.comissao_parceiro}
                      onChange={(e) => { this.onChangeSetValorComissaoParceiro(e, this.state.valor_liquido) }}
                      placeholder="100%" />
                  </th>
                  <th>
                    Comissão Parceiro R$<br />
                    <InputNumber
                      type="number" min="0"
                      precision="2"
                      style={{ width: 100, textAlign: "center" }}
                      defaultValue={this.state.valor_comissao_parceiro}
                      value={this.state.valor_comissao_parceiro}
                      onChange={(e) => { this.setState({ valor_comissao_parceiro: parseFloat(e) }) }}
                      placeholder="0,00" />
                  </th>
                </tr> */}
              </table>
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    );
  }
}

export default Tabela2;


