export default function Text({text,icon,tag}){

	if(text==null || text == '')
	{
		return null;
	}

	return(
		<span className={tag}>
			<i className={'me-2 bi '+icon}></i>
			{text}
		</span>
	)
}