import { Controller, Delete, Get, Post, Param, Put, Patch } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {

    @Get()
    @ApiOperation({ summary: 'Get all movies' })
    getAll(){
        return "모든 영화를 리턴한다.";
    }

    @Get("/:id")
    @ApiOperation({ summary: 'Get one movie by id' })
    @ApiParam({ name: 'id', type: 'string', description: 'The id of the movie' })
    getOne(@Param('id') moveId: string) {
        return `영화 ${moveId} 를 리턴한다.`;
    }

    @Post()
    create(){
        return '영화를 만들거다';
    }

    @Delete("/:id")
    @ApiOperation({ summary: 'Delete one movie by id' })
    @ApiParam({ name: 'id', type: 'string', description: 'The id of the movie' })
    remove(@Param('id') moveId : string){
        return `영화 ${moveId} 를 지운다.`;
    }

    //@Put() Put은 리소스 전체를 업데이트
    @Patch("/:id")
    @ApiOperation({ summary: 'Update one movie by id' })
    @ApiParam({ name: 'id', type: 'string', description: 'The id of the movie' })
    patch(@Param('id') moveId : string){
        return `영화 ${moveId} 를 수정한다.`;
    }
}
