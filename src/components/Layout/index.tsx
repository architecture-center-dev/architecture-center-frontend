import Container from '@material-ui/core/Container';
import AppBar from '../AppBar';
import { CircularProgress } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';

export type LayoutProps = {
  children: React.ReactNode,
};

function Preloader() {
  return (
    <center>
      <CircularProgress style={{ marginTop: "25%" }} />
    </center>
  )
}

function isUserLogged(setShowPreloader: Function) {
  if (window !== undefined) {
    const access_token = localStorage.getItem("access_token");

    if (access_token !== null) {
      setShowPreloader(false);
    } else {
      window.location.href = "/login";
    }

  }
}

export default function Layout({ children }: LayoutProps) {

  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    isUserLogged(setShowPreloader);
  }, [])

  if (showPreloader) {
    return <Preloader />
  }


  return (
    <Container disableGutters={true} maxWidth={false} style={{ backgroundColor: '#f3f3f3' }}>
      <AppBar />
      {children}
    </Container>
  )
}