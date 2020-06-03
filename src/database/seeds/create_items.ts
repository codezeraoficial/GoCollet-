import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("items").insert([
    {
      title: "Lâmpadas",
      image: "lampadas.svg",
      description:
        "A lâmpada fluorescente é composta por vidro, alumínio, pó fosfórico, mercúrio e chumbo. Ao ser descartada intacta em aterros, lixões ou entulhos, ela pode se romper facilmente, emitindo vapores com aproximadamente 20 mg de mercúrio - que caso sejam aspirados, são absorvidos pelos pulmões, podendo causar problemas neurológicos e até hidragirismo (intoxicação que causa tosse, dispneia, dores no peito e outros problemas mais graves).",
    },
    {
      title: "Pilhas e baterias",
      image: "baterias.svg",
      description:
        "O perigo está no interior das pilhas, em sua composição. Estes dispositivos contêm diversos tipos de materiais, sendo os mais perigosos o chumbo, mercúrio e cádmio, que são chamados de metais pesados. Estes ingredientes têm forte potencial de contaminação, e, quando descartados de forma incorreta, podem ocasionar sérias consequências para a saúde humana e a natureza.",
    },
    {
      title: "Papéis e Papelão",
      image: "papeis-papelao.svg",
      description:
        " Tem que descartar em um local seguro para evitar aculo de doenças contaminosas",
    },
    {
      title: "Resíduos Eletrônicos",
      image: "eletronicos.svg",
      description:
        "As consequências do descarte incorreto de eletrônicos vão além dos impactos ambientais. Alguns metais utilizados na fabricação desses produtos podem causar graves problemas de saúde.",
    },
    {
      title: "Resíduos Orgânicos",
      image: "organicos.svg",
      description:
        "A poluição do solo, por exemplo, pode alterar suas características físico-químicas, representando grave ameaça à saúde pública, ao tornar o ambiente propício ao desenvolvimento de transmissores de doenças. Essa deposição de resíduos perigosos no solo e nos vegetais prejudica a flora e fauna, além de ser responsável por reduzir a produção agrícola.",
    },
    {
      title: "Óleo de Cozinha",
      image: "oleo.svg",
      description:
        "Em lugares onde não existe tratamento eficiente de esgoto, o óleo pode se misturar a rios e mares, ficando sempre na sua superfície e causando a mortalidade de peixes e espécies nativas da região. Por onde passa, causa com frequência entupimento das tubulações e canos e, para resolver esse problema, diversos produtos químicos são utilizados para sua remoção, vindo a causar dois tipos distintos de poluição ambiental.Se for descartado em grande quantidade no solo, o óleo pode também causar impermeabilização e contribuir para enchentes e alagamentos.",
    },
  ]);
}
