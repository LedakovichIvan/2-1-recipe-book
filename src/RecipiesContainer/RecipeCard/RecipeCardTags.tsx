import clsx from 'clsx';
import React from 'react';
import { recipeTagContainer, recipeTagsContainer } from '../../ui/styles';
import {
	MAX_TAG_LENGTH_HOME_PAGE,
	MAX_TAGS_PER_RECIPE
} from '../../utils/constants';

const RecipeCardTags: React.FC<{ tags: Array<string> }> = ({ tags }) => {
	return (
		<div className={recipeTagsContainer}>
			{tags.slice(0, MAX_TAGS_PER_RECIPE).map((element, i) => (
				<div className={recipeTagContainer} key={i}>
					<h3 className={clsx('nunito-sans-normal', 'text-[#c65f00]')}>
						{element.substring(0, MAX_TAG_LENGTH_HOME_PAGE)}
					</h3>
				</div>
			))}
		</div>
	);
};

export default RecipeCardTags;
