import { IconProps } from "interfaces/Icons";
import * as React from "react";

const SvgComponent = ({ color = "#000" }: IconProps) => (
  <svg width={48} height={48} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.051 12.836c-.976-3.04-2.543-5.731-4.75-8.047-.558-.586-1.178-1.122-1.567-1.85-.247-.462-.48-.93-.72-1.394l-.153-.383-.042.15c-.02.758-.449 1.272-.983 1.751-.601.54-1.161 1.125-1.738 1.691L19.322 7.09l-1.436 2.64-.96 2.594-.03.04c-.528 1.736-.789 3.521-.917 5.323-.048.678.008 1.365.046 2.046.054.973.223 1.93.477 2.872.92 3.423 2.791 6.261 5.348 8.673.475.448.988.856 1.484 1.282l.219.753.204 1.168.098 1.22c-.002.248-.012.496.003.743.004.063.087.122.133.183l.414.145.43.168-.073-1.084-.003-1.068.148-1.627.108-.354.31-.548c.382-.307.79-.586 1.138-.927.63-.618 1.257-1.244 1.82-1.921a14.437 14.437 0 0 0 1.863-2.864c.337-.687.655-1.388.918-2.106.232-.633.376-1.299.558-1.95l.048-.141c.377-1.758.44-3.534.302-5.321-.111-1.44-.45-2.83-.92-4.193ZM23.59 31.69c.057-.289.129-.576.181-.867-.052.29-.123.578-.181.867Zm1.281.2-.242-.53.242.53.356.304-.356-.304Zm15.058 6.723a3.009 3.009 0 0 0-1.365-1.34 3.832 3.832 0 0 0-1.601-.373c-.417-.012-.836.01-1.253.015-.371.004-.742.01-1.113.007-.436-.004-.873-.017-1.309-.03-.072-.002-.123.013-.157.086-.053.115-.116.225-.18.35l.072.023c.217.039.434.071.65.114.276.056.4.215.413.448.019.332.026.665.025.998-.005 1.318-.015 2.636-.024 3.953a.977.977 0 0 1-.026.26c-.028.094-.057.216-.128.263a1.09 1.09 0 0 1-.418.159c-.21.035-.245.044-.311.25l-.029.104c-.031.113-.014.135.104.136.675.008 1.35.023 2.026.02.616-.002 1.232.036 1.846-.08.58-.11 1.122-.3 1.616-.624.641-.42 1.102-.982 1.346-1.715.196-.593.24-1.197.173-1.816a3.349 3.349 0 0 0-.357-1.209Zm-1.184 3.622c-.362.673-.9 1.122-1.672 1.24-.482.075-.966.053-1.426-.13-.291-.115-.4-.366-.408-.664a30.718 30.718 0 0 1-.013-.874V38.73c.001-.322.007-.646.012-.97.004-.227.051-.303.273-.321.973-.082 1.902.023 2.674.708.477.424.748.964.861 1.585.047.259.061.523.09.786-.023.6-.104 1.182-.391 1.716Zm8.17-1.11c-.191-.467-.555-.76-1.012-.948-.156-.064-.317-.117-.485-.179l.058-.037c.182-.117.385-.211.542-.355.38-.349.539-.788.465-1.31-.07-.496-.318-.86-.76-1.096-.402-.214-.834-.292-1.282-.291-.775 0-1.55.012-2.325.013-.267 0-.534-.02-.8-.023-.053 0-.13.012-.152.047-.06.094-.101.202-.145.306-.025.06 0 .094.07.103.186.026.372.057.558.085.258.039.383.173.399.433l.003.154c0 .808.003 1.616 0 2.424-.004.807-.013 1.614-.023 2.421a2.313 2.313 0 0 1-.03.305c-.022.152-.103.257-.259.29l-.441.087c-.053.01-.128.01-.15.041-.08.122-.146.254-.137.414l.046.012 1.482.036h.298c.513-.007 1.026.004 1.539-.023a3.374 3.374 0 0 0 1.557-.475c.512-.302.907-.7 1.047-1.298.09-.383.09-.767-.062-1.136Zm-3.765-3.443c.002-.162.073-.233.235-.237.397-.01.791-.009 1.175.128.495.177.8.605.795 1.127-.003.2 0 .4-.074.592-.146.38-.425.58-.822.62-.207.02-.416.022-.6.032l-.616-.027c-.082-.003-.118-.039-.117-.123l.024-2.112Zm2.552 5.06c-.199.432-.56.659-1.013.738a2.56 2.56 0 0 1-1.084-.048c-.265-.068-.373-.28-.426-.516-.035-.158-.03-.346-.032-.51-.005-.254-.002-.78-.002-.78h-.005v-1.06c-.001-.077.012-.116.107-.113.337.01.674.016 1.011.03.301.01.583.1.848.243.404.218.647.55.714 1.008.05.347.029.688-.118 1.008Zm-36.97.405.007-2.04a2.698 2.698 0 0 0-.138-.898c-.278-.801-1.042-1.166-1.838-.878-.361.13-.686.329-.996.554-.18.131-.18.131-.31-.056-.37-.53-.897-.71-1.512-.515-.397.126-.744.341-1.073.592-.03.023-.093.049-.111.035-.03-.023-.052-.077-.051-.118l.022-.362c.002-.076-.013-.153-.02-.233-.149.052-.267.103-.391.133-.384.094-.77.18-1.156.268-.093.022-.192.05-.201.157-.01.105.092.123.171.154.166.067.33.138.494.21.138.06.19.17.189.318-.003.632.001 1.263-.003 1.895-.001.257-.013.514-.025.77-.01.228-.088.323-.308.38-.117.032-.236.052-.354.08-.026.006-.07.022-.07.035-.005.111-.011.225.007.334.004.02.122.02.187.027l.044-.003c.454-.007.909-.014 1.364-.018.24-.003.482 0 .743 0l.029-.365c-.15-.027-.284-.048-.416-.076-.206-.046-.294-.155-.3-.362l-.003-.298c-.002-.771-.005-1.542-.005-2.313 0-.113.046-.201.145-.269.209-.14.43-.253.673-.315.515-.132.961.051 1.16.489.062.138.11.29.125.44.073.773.041 1.547-.003 2.32-.01.168-.088.252-.252.292l-.387.082c-.031.008-.077-.013-.079.013-.009.107-.004.27-.004.27h.093l1.178.04c.323-.001.646.038.968.046.058.001.11.01.113-.057.005-.106 0-.205-.004-.311l-.062-.01-.332-.075c-.223-.053-.3-.139-.301-.365-.003-.558.004-1.116 0-1.674a16.96 16.96 0 0 0-.036-.957c-.006-.085.007-.14.075-.188.199-.142.414-.25.65-.313.725-.191 1.319.207 1.357.955.036.721.02 1.445.015 2.168-.002.252-.085.328-.333.396l-.085.022c-.254.06-.252.06-.237.33.005.085.028.106.118.104.517-.012 1.035-.015 1.552-.02h.653l.047-.35c-.202-.054-.389-.093-.569-.152-.159-.054-.215-.15-.214-.318Zm17.808-3.09c.213-.198.215-.46.155-.75a.841.841 0 0 1-.573.274c-.29.02-.573-.004-.843-.12-.728-.312-1.445-.29-2.16.053-.6.288-.97.737-1.008 1.418-.023.436.059.849.35 1.195a1.5 1.5 0 0 0 .65.436c.109.04.117.092.026.161a2.598 2.598 0 0 1-.209.142c-.152.096-.305.19-.46.283-.09.055-.12.125-.091.232.086.314.31.495.589.628l.101.07-.089.09c-.273.221-.557.43-.819.666-.22.197-.29.462-.224.754.134.583.52.944 1.069 1.11.959.29 1.86.123 2.68-.445.487-.337.836-.776.942-1.38.119-.678-.258-1.267-.933-1.388-.446-.081-.903-.104-1.354-.156-.21-.024-.425-.038-.63-.087-.174-.04-.26-.183-.245-.322.017-.136.162-.263.328-.276.334-.027.662-.08.97-.22.817-.374 1.196-1.028 1.101-1.909-.012-.118-.04-.235-.063-.373.26.044.528.11.74-.087Zm-2.478 4.13c.332.01.71.031 1.075.138.322.094.586.258.664.617.094.433-.114.864-.534 1.096-.393.217-.82.235-1.252.19-.371-.038-.704-.166-.971-.44-.352-.36-.354-.859-.002-1.218.315-.321.483-.388 1.02-.382Zm.831-2.61c-.193.619-.757.705-1.198.507-.376-.169-.54-.5-.626-.879-.033-.145-.041-.296-.06-.445.007-.214.043-.418.134-.61.282-.592.974-.556 1.357-.289a.97.97 0 0 1 .35.456c.159.414.175.836.043 1.26Zm-3.514 1.974a2.996 2.996 0 0 1-.396-.089c-.228-.07-.256-.112-.258-.354-.007-.672-.012-1.344-.02-2.015-.003-.303-.039-.6-.131-.89-.244-.76-.99-1.17-1.738-.945-.414.125-.77.357-1.1.63l-.121.093v-.125c.008-.142.023-.285.022-.428 0-.075-.029-.15-.043-.215-.282.085-.535.17-.794.235-.259.066-.523.11-.785.163-.13.026-.226.105-.224.195.004.126.108.15.2.188.165.068.33.137.495.21.117.052.164.148.163.274-.008.873-.013 1.747-.026 2.621-.004.276-.074.349-.345.41l-.119.023c-.25.043-.258.053-.24.319v.043c-.002.102.042.135.147.134.668-.008 1.336-.011 2.003-.009.286.001.317-.021.311-.315l-.013-.127c-.164-.027-.32-.047-.473-.08-.16-.036-.218-.102-.233-.265a5.44 5.44 0 0 1-.02-.45c-.007-.686-.013-1.373-.017-2.059 0-.173.032-.333.19-.445.242-.168.506-.266.797-.285.596-.041 1.049.312 1.08.905.04.733.029 1.468.038 2.201 0 .055-.009.11-.017.165-.014.107-.066.188-.175.215a3.139 3.139 0 0 1-.322.07c-.162.023-.165.022-.177.185l.004.11c.019.19.02.184.211.182.646-.005 1.291-.008 1.937-.008.27.001.289-.012.291-.29v-.066c.003-.071-.029-.1-.102-.111Zm9.02-4.247c-.677-.165-1.319-.042-1.929.273-.592.307-.988.78-1.139 1.434a2.868 2.868 0 0 0 .213 1.92c.19.399.482.707.88.907.933.47 2.073.257 2.804-.371.578-.495.79-1.155.802-1.971-.008-.082-.016-.24-.037-.396-.123-.888-.738-1.586-1.594-1.796Zm.512 3.434c-.18.707-.79 1.021-1.48.778a1.432 1.432 0 0 1-.793-.68 2.942 2.942 0 0 1-.254-2.319c.155-.533.594-.826 1.117-.789.467.033.826.257 1.09.637.278.402.385.858.413 1.337.005.077.001.154.001.231l.033.004c-.041.267-.06.54-.127.8Zm-17.536-3.445c-.712-.163-1.38-.002-1.997.36-.535.313-.88.78-1.012 1.39a2.945 2.945 0 0 0 .128 1.678c.123.333.31.626.583.854.576.48 1.248.602 1.964.468.606-.114 1.139-.383 1.526-.887.362-.47.5-1.011.514-1.598-.021-.185-.026-.374-.066-.555-.195-.904-.724-1.501-1.64-1.71Zm.58 3.442c-.173.704-.794 1.026-1.48.783-.44-.157-.726-.479-.907-.892a3.04 3.04 0 0 1-.161-2.053c.144-.535.577-.93 1.242-.835.407.058.725.266.962.597.32.447.426.958.44 1.496v.11l.027.004c-.039.264-.058.532-.122.79Z"
      fill={color}
    />
  </svg>
);

export default SvgComponent;