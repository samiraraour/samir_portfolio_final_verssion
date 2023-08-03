import Footer from '@/components/Footer'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ReduxProvider } from '@/redux/provider'
import Header from '@/components/Header'

//  Metadonnees de la page pour le SEO (Search Engine Optimization)
export const metadata = {
  title: 'Samir Araour Portofolio',
  description: 'Samir Araour Portofolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {/* 
          ReduxProvider permet d'utiliser le store redux dans tous les composants
        */}
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
