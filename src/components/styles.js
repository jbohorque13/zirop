import { colorGlobal } from 'styles/index';

export const linkStyles = {
    fontSize: 20,
    color: '#000',
    fontWeight: 600,
    textDecoration: 'none',
}

export const listStyles = {
    display: 'flex',
    backgroundColor: colorGlobal.yellow,
    position: 'fixed',
    flex: '1',
    padding: '8px 0',
    margin: '0',
    zIndex: 50,
}

export const itemListStyles = {
    display: 'flex',
    flex: '1',
    justifyContent: 'center',
    alignItems: 'center',
}


export const sectionStyles = {
    alignItems: "center", 
    justifyContent: "center", 
    color: '#000',
    fontSize: '36px',
    flexDirection: 'column',
    paddingVertical: '25px',
}

export const titleStyles = {
    color: '#fff',
    fontSize: '36px',
    fontWeight: 100,
} 

export const buttonStyles = {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    borderWidth: '1px',
    borderColor: '#ccc',
    borderRadius: '10px',
}

export const linkButtonStyles = {
    display: 'flex',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderWidth: '1px',
    borderColor: '#ccc',
    borderRadius: '10px',
    textDecoration: 'none',
    padding: '10px 20px',
}