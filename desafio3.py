from datetime import datetime

valor = 1000
data_vencimento = datetime.strptime("15/09/2026", "%d/%m/%Y")

# Pega a data atual
hoje = datetime.now()

# Calcula a diferença entre as duas datas
diferenca = hoje - data_vencimento
dias_atraso = diferenca.days

if dias_atraso > 0:

    # Calcula 2,5% de juros para cada dia de atraso
    juros = valor * 0.025 * dias_atraso

    valor_total = valor + juros

    print("Dias de atraso:", dias_atraso)
    print("Valor dos juros: R$", round(juros, 2))
    print("Valor total: R$", round(valor_total, 2))

else:
    print("O pagamento não está atrasado.")