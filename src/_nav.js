import { getLocalStorageParam } from './util/metodos'

export function getNav() {
  const items = [
    {
      name: 'São Marcos',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: ''
      }
    }
  ]

  if (getLocalStorageParam('cpdchamado') === "1" || getLocalStorageParam('idMedico') !== "0") {
    items.push({
      name: 'Ramais',
      url: '/ramais',
      icon: 'cui-screen-smartphone'
    })
  }

  items.push({
    title: true,
    name: 'Meus Sistemas'
  })

  if (getLocalStorageParam('cpdchamado') === "1")
    items.push({
      name: 'Chamados T.I.',
      url: '/ti',
      icon: 'icon-wrench'
    })

    if (getLocalStorageParam('chapa') !== "")
    items.push({
      name: 'Contra Cheque',
      url: '/contracheque',
      icon: 'cui-dollar'
    })

  if (getLocalStorageParam('idMedico') !== "0") {
    items.push({
      name: 'Repasses',
      url: '/repasses',
      icon: 'cui-dollar'
    })

    items.push({
      name: 'Exames',
      url: '/paciente/pesquisar',
      icon: 'icon-film'
    })

    items.push({
      name: 'Serviços Executados',
      url: '/servexec',
      icon: 'icon-graph'
    })

  }

  if (getLocalStorageParam('idContador') !== "0") {
    items.push({
      name: 'Repasses',
      url: '/contador',
      icon: 'cui-dollar'
    })
  }

  return items
}
