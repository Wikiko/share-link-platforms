import { Test, TestingModule } from '@nestjs/testing';
import { FuncionarioService } from './funcionario.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Funcionario } from './entities/funcionario.entity';
import { Repository } from 'typeorm';
import { Id } from '../valueobject/Id';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';

describe('FuncionarioService', () => {
  let service: FuncionarioService;
  let funcionarioRepository: Repository<Funcionario>;
  beforeEach(async () => {
    funcionarioRepository = {} as Repository<Funcionario>;
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FuncionarioService,
        {
          provide: getRepositoryToken(Funcionario),
          useValue: funcionarioRepository,
        },
      ],
    }).compile();

    service = module.get<FuncionarioService>(FuncionarioService);
  });

  it('should create one funcionario', async () => {
    const func = {
      nome: 'Joaquim',
      cargo: 'Pedreiro',
    };
    funcionarioRepository.save = jest
      .fn()
      .mockImplementationOnce((parameter: Funcionario) =>
        Promise.resolve(parameter),
      );

    const result = await service.create(func);

    expect(funcionarioRepository.save).toBeCalledTimes(1);
    expect(result.nome).toBe(func.nome);
    expect(result.cargo).toBe(func.cargo);
    expect(result.id).toBeInstanceOf(Id);
  });

  it('should list all funcionarios', async () => {
    const funcionarios: Funcionario[] = [
      new Funcionario({
        nome: 'Joaquim',
        cargo: 'Pedreiro',
        id: Id.generate(),
      }),
      new Funcionario({ nome: 'Rafael', cargo: 'Ajudante', id: Id.generate() }),
    ];

    funcionarioRepository.find = jest.fn().mockResolvedValueOnce(funcionarios);

    await expect(service.findAll()).resolves.toBe(funcionarios);
    expect(funcionarioRepository.find).toBeCalled();
  });


});
