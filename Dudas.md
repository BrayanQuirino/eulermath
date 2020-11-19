# Dudas

|Regla|Duda|Celda en excel|Paramatros Especificos|Solucion propuesta|
|---|---|---|-|----------------|
|FLIQUI|Se hace una llamada a dos funciones (esDiaFestivo, esFinDeSemana) para evaluar diaInhabil y no se donde se guardan esos valores|D30|SI pkg_tesoreria_comun.esFindeSemana(vlDia_Inhabil) ó pkg_tesoreria_comun.esDiaFestivo(vlDia_Inhabil)| Cree dos parametros jaja esDiaFestivo y esFinDeSemana</br> y agrege como reglas diaInhabil == esDiaFestivo</br>diaInhabil == esFinDeSemana|
|FLIQUI|No se en que valores va esto o como se evalua|D26|Y (NVL(PERegOrden.f_liquida_pago, PEFOperacion) > TRUNC(SYSDATE)|En mi logica fechaOperacion seria el trunc(sysdate) fechaLiquidaPago > fechaOperacion|
|HLIQUI|No supe como interpretar|D28|SYSDATE < TRUNC(SYSDATE) + (vlHora/24)|No lo puse|  
|HORLIQ||D22|No encontre estos valores:</br>vlHInicio > vlHactual ó vlHCierre < vlHactual|Cree valores</br>horaInicio y horaCierre y así los compare|
|IMPSPE|Esta de plano me saco de onda totalmente jajaj en las validaciones en 2(los casos contrarios) evalua básicamente lo mismo que en el if, osea es un if (i=3) else if (i=3) jajajaja o de plano no supe como leerlo|D27|Toda la celda|No lo puse|
