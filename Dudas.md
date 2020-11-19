# Dudas

|Regla|Duda|Celda en excel|Paramatros Especificos|Solucion propuesta|Comentario|
|---|---|---|-|----------------|--|
|FLIQUI|Se hace una llamada a dos funciones (esDiaFestivo, esFinDeSemana) para evaluar diaInhabil y no se donde se guardan esos valores|D30|SI pkg_tesoreria_comun.esFindeSemana(vlDia_Inhabil) ó pkg_tesoreria_comun.esDiaFestivo(vlDia_Inhabil)| Invente dos parametros jaja esDiaFestivo y esFinDeSemana</br> y agrege como reglas diaInhabil == esDiaFestivo</br>diaInhabil == esFinDeSemana|OK|
|FLIQUI|No se en que valores va esto o como se evalua|D26|Y (NVL(PERegOrden.f_liquida_pago, PEFOperacion) > TRUNC(SYSDATE)|En mi logica fechaOperacion seria el trunc(sysdate) fechaLiquidaPago > fechaOperacion|NVL es una expresion de comparacion NVL(expresion_es_null, devuelve_esto) [https://docs.oracle.com/cd/B19306_01/server.102/b14200/functions105.htm]|
|HLIQUI|No supe como interpretar|D28|SYSDATE < TRUNC(SYSDATE) + (vlHora/24)|No lo puse|  Lo checho a detalle|
|HORLIQ|No encontre unos valores|D22|No encontre estos valores:</br>vlHInicio > vlHactual ó vlHCierre < vlHactual|Invente los parametros</br>horaInicio y horaCierre y así los compare|Creo serán enriquecidos, pero checo el detalle|
|IMPSPE|Esta de plano me saco de onda totalmente jajaj en las validaciones en 2(los casos contrarios) evalua básicamente lo mismo que en el if, osea es como decir if (i=3) else if (i=3) jajajaja o de plano no supe como leerlo|D30:D38|Todas las celda|No lo puse|Lo checo|
