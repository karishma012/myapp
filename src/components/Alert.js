import React from 'react'

const Alert = (Props) => {
  return (
    <div>
      <div class="alert alert-primary" role="alert">
  {Props.message}
</div>
    </div>
  )
}

export default Alert