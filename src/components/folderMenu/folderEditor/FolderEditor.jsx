import styles from "./FolderEditor.module.css";

function FolderEditor({ onModalClick }) {
  const handleClick = (e) => {
    const modalType = e.currentTarget.value;
    onModalClick(modalType);
  };
  return (
    <div className={styles.folderEditor}>
      <button
        className={styles.editor}
        value={"SHARE_FOLDER"}
        onClick={handleClick}
      >
        <ShareIcon />
        공유
      </button>
      <button
        className={styles.editor}
        value={"EDIT_FOLDER_NAME"}
        onClick={handleClick}
      >
        <ChageNameIcon />
        이름 변경
      </button>
      <button
        className={styles.editor}
        value={"DELETE_FOLDER"}
        onClick={handleClick}
      >
        <DeleteIcon />
        삭제
      </button>
    </div>
  );
}

function ShareIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_7496_5345)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.8951 11.045C7.6315 10.7813 7.6315 10.354 7.8951 10.0904L14.3296 3.52012H10.868C10.4953 3.52012 10.193 3.21792 10.193 2.84512C10.193 2.47233 10.4952 2.17012 10.868 2.17012H15.9592C16.332 2.17012 16.6342 2.47233 16.6342 2.84512L16.6342 7.93629C16.6342 8.30909 16.332 8.61129 15.9592 8.61129C15.5864 8.61129 15.2842 8.30908 15.2842 7.93629L15.2842 4.47472L8.8497 11.045C8.5861 11.3086 8.15871 11.3086 7.8951 11.045Z"
          fill="#9FA6B2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.9999 4.77505C4.37858 4.77505 3.8749 5.27873 3.8749 5.90005V14C3.8749 14.6214 4.37858 15.125 4.9999 15.125H13.0999C13.7212 15.125 14.2249 14.6214 14.2249 14V10.85C14.2249 10.4773 14.5271 10.175 14.8999 10.175C15.2727 10.175 15.5749 10.4773 15.5749 10.85V14C15.5749 15.367 14.4668 16.475 13.0999 16.475H4.9999C3.633 16.475 2.5249 15.367 2.5249 14V5.90005C2.5249 4.53314 3.633 3.42505 4.9999 3.42505H8.1499C8.52269 3.42505 8.8249 3.72726 8.8249 4.10005C8.8249 4.47284 8.52269 4.77505 8.1499 4.77505H4.9999Z"
          fill="#9FA6B2"
        />
      </g>
      <defs>
        <clipPath id="clip0_7496_5345">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function ChageNameIcon() {
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.8785 2.4083C13.3194 1.96742 14.0331 1.96742 14.474 2.4083L17.1716 5.10595C17.6125 5.54683 17.6125 6.2605 17.1716 6.70139L8.17572 15.6973C8.0931 15.7799 7.98592 15.8335 7.87025 15.85L3.7526 16.4382C3.58434 16.4623 3.41458 16.4057 3.2944 16.2855C3.17421 16.1653 3.11763 15.9956 3.14166 15.8273L3.7299 11.7097C3.74642 11.594 3.80002 11.4868 3.88263 11.4042L12.8785 2.4083ZM13.7103 3.17197C13.6912 3.15286 13.6613 3.15286 13.6422 3.17197L4.77359 12.0406L4.31263 15.2673L7.53933 14.8063L16.4079 5.93771C16.427 5.91859 16.427 5.88874 16.4079 5.86962L13.7103 3.17197Z"
      fill="#9FA6B2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.8229 3.75704C16.0338 3.96792 16.0338 4.30983 15.8229 4.52071L8.76412 11.5795C8.55324 11.7904 8.21133 11.7904 8.00045 11.5795C7.78956 11.3687 7.78956 11.0267 8.00045 10.8159L15.0593 3.75704C15.2702 3.54616 15.6121 3.54616 15.8229 3.75704Z"
      fill="#9FA6B2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.88277 11.4043C4.09365 11.1934 4.43556 11.1934 4.64645 11.4043L8.17586 14.9337C8.38674 15.1446 8.38674 15.4865 8.17586 15.6973C7.96498 15.9082 7.62307 15.9082 7.41218 15.6973L3.88277 12.1679C3.67189 11.957 3.67189 11.6151 3.88277 11.4043Z"
      fill="#9FA6B2"
    />
  </svg>;
}

function DeleteIcon() {
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.1 5.1H14.9V15.5C14.9 16.2732 14.2732 16.9 13.5 16.9H5.5C4.7268 16.9 4.1 16.2732 4.1 15.5V5.1Z"
      stroke="#9FA6B2"
      stroke-width="1.2"
    />
    <path
      d="M6.98387 3.07385C7.22102 2.59955 7.70579 2.29995 8.23607 2.29995H10.7639C11.2942 2.29995 11.779 2.59955 12.0161 3.07385L13.0292 5.09995H5.97082L6.98387 3.07385Z"
      stroke="#9FA6B2"
      stroke-width="1.2"
    />
    <rect x="2" y="4.5" width="15" height="1.2" rx="0.6" fill="#9FA6B2" />
    <rect
      x="10.1001"
      y="7.5"
      width="7"
      height="1.2"
      rx="0.6"
      transform="rotate(90 10.1001 7.5)"
      fill="#9FA6B2"
    />
    <rect
      x="12.6997"
      y="7.5"
      width="7"
      height="1.2"
      rx="0.6"
      transform="rotate(90 12.6997 7.5)"
      fill="#9FA6B2"
    />
    <rect
      x="7.7002"
      y="7.5"
      width="7"
      height="1.2"
      rx="0.6"
      transform="rotate(90 7.7002 7.5)"
      fill="#9FA6B2"
    />
  </svg>;
}

export default FolderEditor;
