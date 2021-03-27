export interface ProyectosResponse {
  data: Proyecto[];
}

export interface Proyecto {
  ID:                           string;
  FECHA_CREACION:               Date;
  FECHA_PRESENTACION_OFERTAS:   string;
  ESTADO:                       Estado;
  TIPO_PROCESO:                 null | string;
  FASE:                         Fase;
  TIPO_CONTRATO:                string | null ;
  TIPO_CONTRATO_KEY:            string;
  PRECIO_TOTAL:                 number;
  TITULO:                       string;
  DESCRIPCION:                  string;
  MODALIDAD_CONTRATACION:       null | string;
  DURACION:                     number | null;
  DURACION_TIPO:                DuracionTipo | null;
  DIRECCION_EJECUCION:          string;
  UNSPSC_PRINCIPAL:             string;
  VALOR_ESTIMADO_ADQUISICIONES: number | null;
  UPDATED_AT:                   Date;
  isPrivate:                    number;
  VISTAS:                       number;
  oferentes:                    number;
  URL?:                         string;
}

export enum DuracionTipo {
  Days = "Days",
  Months = "Months",
}

export enum Estado {
  ProcesoAdjudicadoYCelebrado = "Proceso adjudicado y celebrado",
  ProcesoEnEvaluaciónYObservaciones = "Proceso en evaluación y observaciones",
}

export enum Fase {
  FaseDeSelecciónPresentaciónDeOfertas = "Fase de Selección (Presentación de ofertas)",
  PresentaciónDeOferta = "Presentación de oferta",
}
