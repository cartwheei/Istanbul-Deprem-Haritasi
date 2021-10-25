import React from "react";
import './IbbLegend.css'

const IbbLegend = () => {
  return (
    <div className="ibb">
    <p>
      Zemin davranış analizlerinden bulunan ortalama spektarl ivme değerlerine karşı gelen bölgeler (AS, BS, ve CS) 
      ile Borchret (1994) bağıntısı kullanılarak eşdeğer kayma dalgası hızından hesaplanan spektral ivmelere karşı
       gelen bölgeler (AV, BV ve CV) arasında bir değerlendirme yapılmıştır.
      <br />
       Bu iki harita üç bölgeye ayrıldığı için, sonuç ürünü de yine üç farklı bölgeye aşağıdaki kriterlere uygun olarak
       ayrılmıştır.
       <br />
       <strong>Ags Bölgesi</strong>, (AS ile AV) veya (AS ile BV) veya (BS ile AV) bölgelerinin örtüştüğü bölgelerdir.
       <br />
       <strong>Bgs bölgesi</strong>, (AS ile CV) veya (CS ile AV) veya (BS ile BV) bölgelerinin örtüştüğü bölgelerdir.
       <br />
       <strong>Cgs bölgesi</strong>, (BS ile CV) veya (CS ile BV) veya (BS ile CV) bölgelerinin örtüştüğü bölgelerdir.
       </p>
    </div>
  )
}

export default IbbLegend;