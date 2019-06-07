import { services } from "./xml2obj";

let xml = `<?xml version="1.0"?>
<CFe>
  <infCFe versaoDadosEnt="0.07">
    <ide>
      <CNPJ>71839397000158</CNPJ>
      <signAC>NOME DA EMPRESA</signAC>
      <numeroCaixa>001</numeroCaixa>
    </ide>
    <emit>
      <CNPJ>43250046000171</CNPJ>
      <IE>111111111111</IE>
      <IM>12345</IM>
      <cRegTribISSQN>3</cRegTribISSQN>
      <indRatISSQN>N</indRatISSQN>
    </emit>
    <dest/>
    <det nItem="1">
      <prod>
        <cProd>116</cProd>
        <cEAN>9990000001163</cEAN>
        <xProd>Janela</xProd>
        <CFOP>5405</CFOP>
        <uCom>UN</uCom>
        <qCom>1.0000</qCom>
        <vUnCom>4.00</vUnCom>
        <indRegra>A</indRegra>
      </prod>
      <imposto>
        <ICMS>
          <ICMSSN102>
            <Orig>0</Orig>
            <CSOSN>500</CSOSN>
          </ICMSSN102>
        </ICMS>
        <PIS>
          <PISSN>
            <CST>49</CST>
          </PISSN>
        </PIS>
        <COFINS>
          <COFINSSN>
            <CST>49</CST>
          </COFINSSN>
        </COFINS>
      </imposto>
    </det>
    <total/>
    <pgto>
      <MP>
        <cMP>01</cMP>
        <vMP>4.00</vMP>
      </MP>
    </pgto>
  </infCFe>
</CFe>`;

const convertedXML = services.convert(xml);

document.getElementById("output").innerHTML = JSON.stringify(
  convertedXML,
  undefined,
  2
);

console.info(convertedXML);
