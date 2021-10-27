<template>
  <ul>
    <li>
      <a href="http://192.168.0.66:8777/aluminum/public/api/customer"
        >Customer</a
      >
      <ol>
        <li>
          客戶修改API : <br />
          Method:PUT <br />
          http://192.168.0.66:8777/aluminum/public/api/customer/{id}
        </li>
        <li>
          客戶刪除API : <br />
          Method:DELETE <br />
          http://192.168.0.66:8777/aluminum/public/api/customer/{id}
        </li>
      </ol>
    </li>
    <li>
      <a href="http://192.168.0.66:8777/aluminum/public/api/material"
        >Material</a
      >
    </li>
    <li>
      <a href="http://192.168.0.66:8777/aluminum/public/api/materialcost"
        >MaterialCost</a
      >
    </li>
    <li>
      <a href="http://192.168.0.66:8777/aluminum/public/api/specname"
        >SpecName</a
      >
    </li>
    <li>
      <a href="http://192.168.0.66:8777/aluminum/public/api/specprice"
        >SpecPrice</a
      >
    </li>
  </ul>
</template>
<script>
export default {};
</script>
