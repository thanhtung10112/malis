import { SvgIcon } from '@material-ui/core'

function ExcelIcon(props) {
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" id="OutLine" viewBox="0 0 512 512" {...props}>
      <path d="M349.657,18.343A8,8,0,0,0,344,16H120A56.064,56.064,0,0,0,64,72V440a56.064,56.064,0,0,0,56,56H392a56.064,56.064,0,0,0,56-56V120a8,8,0,0,0-2.343-5.657ZM352,43.313,420.687,112H392a40.045,40.045,0,0,1-40-40ZM120,32H336V72a56.064,56.064,0,0,0,56,56h40V352H80V72A40.045,40.045,0,0,1,120,32ZM392,480H120a40.045,40.045,0,0,1-40-40V368H432v72A40.045,40.045,0,0,1,392,480Z" />
      <path d="M272,448H248V392a8,8,0,0,0-16,0v64a8,8,0,0,0,8,8h32a8,8,0,0,0,0-16Z" />
      <path d="M211.578,384.845a8,8,0,0,0-10.733,3.577L192,406.112l-8.845-17.69a8,8,0,0,0-14.31,7.156L183.056,424l-14.211,28.422a8,8,0,1,0,14.31,7.156L192,441.888l8.845,17.69a8,8,0,1,0,14.31-7.156L200.944,424l14.211-28.422A8,8,0,0,0,211.578,384.845Z" />
      <path d="M320,400h16a8,8,0,0,0,0-16H320a24,24,0,0,0,0,48,8,8,0,0,1,0,16H304a8,8,0,0,0,0,16h16a24,24,0,0,0,0-48,8,8,0,0,1,0-16Z" />
      <path d="M136,304H376a8,8,0,0,0,8-8V152a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8V296A8,8,0,0,0,136,304Zm8-48h64v32H144Zm144-48v32H224V208Zm-64-16V160h64v32Zm80,16h64v32H304Zm-16,48v32H224V256Zm-80-16H144V208h64Zm96,48V256h64v32Zm64-96H304V160h64ZM208,160v32H144V160Z" />
    </SvgIcon>
  )
}

ExcelIcon.defaultProps = {
  width: 17,
  height: 17
}

export default ExcelIcon
